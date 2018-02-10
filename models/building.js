const mongoose = require('mongoose');
const schema = mongoose.Schema;
const _ = require('lodash');

const BuildingSchema = new schema({

	buildingId: {
		type: String,
		required: true,
		unique: true
	},
	floors: {
		type: Number
	},
	units: [{
		floor: {
			type: String,
			required: true
		},
		unitNumber: {
			type: String,
			required: true
		},
		residentId: {
			type: String,
			required: true
		}
	}],
	packages: [{
		unitNumber: {
			type: String
		},
		carrier: {
			type: String
		},
		deliveryDate: {
			type: Date,
		},
		pickedUp: {
			type: Boolean,
			default: false
		},
		pickedUpDate: {
			type: Date
		},
		lastReminderDate: {
			type: Date
		},
		trackingNumber: {
			type: String
		}
	}]
});

const Building = mongoose.model('Building', BuildingSchema);

module.exports = Building;