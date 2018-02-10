
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const secret = process.env.JWT_SECRET;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 5,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 6
	},
	tokens: [{
		access: {
			type: String,
			required: true
		},
		token: {
			type: String,
			required: true
		}
	}],
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	phone: {
		number: {
			type: String,
			required: true,
		},
		isCell: {
			type: Boolean,
		}
	},
	role: {
		type: String,
		required: true,
	},
	buildingId: {
		type: String,
		required: true
	},
	unitNumber: {
		type: String,
		required: true
	}
});

UserSchema.methods.toJSON = function () {
	const user = this;
	const userObject = user.toObject();
	return _.omit(userObject, ['tokens', '_id', '__v', 'password']);
};

UserSchema.methods.generateAuthToken = function () {
	const user = this;
	const access = 'auth';
	const token = jwt.sign({ _id: user._id.toHexString(), email: user.email, fisrtName: user.firstName, lastName: user.lastName, role: user.role, buildingId: user.buildingId, unitNumber: user.unitNumber, phone: user.phone, access }, secret, { expiresIn: '7d' }).toString();

	user.tokens.push({ access, token });
	return user.save().then(() => {
		return token;
	});
};

UserSchema.methods.removeToken = function (token) {
	const user = this;
	return user.update({
		$pull: {
			tokens: { token }
		}
	});
};

UserSchema.statics.findByToken = function (token) {
	const User = this;
	let verified;
	try {
		verified = jwt.verify(token, secret);
	} catch (e) {
		return Promise.reject('Token Expired, Please Login!');
	};

	return User.findOne({
		'_id': verified._id,
		'tokens.token': token,
		'tokens.access': 'auth'
	});
};

UserSchema.statics.findByCredentials = function (email, password) {
	const User = this;

	return User.findOne({ email }).then(user => {
		if (!user) return Promise.reject('Invalid Email or Password Entered');
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, user.password, (err, result) => {
				if (result) {
					resolve(user);
				} else {
					reject('Invalid Email or Password Entered');
				};
			});
		});
	});
};

UserSchema.pre('save', function (next) {
	const user = this;

	if (!user.isModified('password')) return next();

	bcrypt.genSalt(10, (err, salt) => {
		if (err) return console.log(err);
		bcrypt.hash(user.password, salt, (error, hash) => {
			if (error) return console.log(error);
			user.password = hash;
			next();
		});
	});
});

const User = mongoose.model('User', UserSchema);

module.exports = User;