// .env configuration
require('dotenv').config();

// Bringing all the dependencies in
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const User = require('./models/user');
const Building = require('./models/building');
const authenticate = require('./middleware/authenticate');
const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
const textFrom = process.env.TWILIO_FROM;

const secret = process.env.JWT_SECRET;

// Connecting to mongoose
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

// initial configuartoins of express
const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const updateBuildingResident = (user) => {
	const buildingId = user.buildingId;
	const unitNumber = user.unitNumber;
	const floor = unitNumber.replace(/..$/, '');
	const unit = {
		residentId: user['_id'],
		unitNumber,
		floor
	};
	return Building.update({ buildingId }, { $push: { units: unit } }, { upsert: true }, (err, res) => {
		if (err) return console.log(`Adding unit to building: ${err}`);
	});
};

const notifyResident = (trackingNumber, phone) => {
	client.messages.create({
		to: `+1${phone}`,
		from: '+18582643822',
		body: `Your Package ${trackingNumber} has been received, please come to the front desk to pick it up.`
	});
};

// Signup route
app.post('/signup', (req, res) => {
	const body = _.pick(req.body, ['email', 'password', 'firstName', 'lastName', 'role', 'buildingId', 'phone', 'unitNumber']);
	const user = new User(body);

	user.save().then((result) => {
		updateBuildingResident(result);
		return user.generateAuthToken();
	}).then(token => {
		res.header('X-Auth', token).send(user);
	}).catch(e => {
		res.status(400).send(e);
	});
});

// Login route
app.post('/login', (req, res) => {
	const body = _.pick(req.body, ['email', 'password']);

	User.findByCredentials(body.email, body.password).then(user => {
		user.generateAuthToken().then(token => res.header('X-Auth', token).send(user));
	}).catch(e => {
		res.status(400).send(e);
	});
});

// Authentication route
app.get('/authenticate', authenticate, (req, res) => {
	res.send(req.user);
});

// Logout
app.delete('/logout', authenticate, (req, res) => {
	req.user.removeToken(req.token).then(() => {
		res.status(200).send('Logged Out');
	}, () => {
		res.status(400).send('Cannot Logout');
	});
});

app.post('/new-parcel', authenticate, (req, res) => {
	const buildingId = req.body.buildingId;
	const packageInfo = _.pick(req.body, ['unitNumber', 'carrier', 'trackingNumber', 'deliveryDate']);
	Building.findOneAndUpdate({ buildingId }, { $push: { packages: packageInfo } }, { upsert: true }).then((resBuilding, err) => {
		if (err) return res.status(400).send(err);
		User.findOne({ buildingId, unitNumber: packageInfo.unitNumber }).then((result, error) => {
			if (error) return res.status(400).send(error);
			// Send notification
			// notifyResident(packageInfo.trackingNumber, pack);
			res.status(200).send('Resident has been notified!');
		});
	});
});

app.get('/all-parcels/:buildingId', authenticate, (req, res) => {
	Building.find({ buildingId: req.params.buildingId }, 'packages').then((result, error) => {
		if (error) {
			console.log(error);
			return res.status(200).send(error);
		}
		res.status(200).send(result);
	});
});

app.get('/buildings/:buildingId', authenticate, (req, res) => {
	Building.findOne({ buildingId: req.params.buildingId }).then((result, error) => {
		if (error) {
			console.log(error);
			return res.status(400).send(error);
		}
		res.status(200).send(result);
	});
});

app.post('/new-building/:buildingId', authenticate, (req, res) => {
	const buildingInfo = _.pick(req.body, ['floors', 'units', 'packages']);
	Building.findByIdAndUpdate({ buildingId: req.params.buildingId }, { buildingInfo }, { upsert: true }).then((result, error) => {
		if (error) {
			console.log(error);
			return res.status(400).send(error);
		};
		res.status(200).send(result);
	});
});

app.listen(PORT, () => {
	console.log(`API server is running on port ${PORT}`);
});