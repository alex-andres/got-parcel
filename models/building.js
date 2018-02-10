const mongoose = require('mongoose');
const schema = mongoose.Schema;

const BuildingSchema = new schema({

	buildingId: {
		type: String,
		required: true,
		unique: true
	},
	units: [{
		unitNumber: {
			type: String,
			required: true,
			unique: true
		},
		residentId: {
			type: String
		}
	}],
	packages: [{
		unitNumber: {
			type: String,
			required: true
		},
		carrier: {
			type: String,
			required: true,
			default: 'Unknown'
		},
		deliveryDate: {
			type: Date,
			required: true,
			default: null
		},
		pickedUp: {
			type: Boolean
		},
		pickedUpDate: {
			type: Date
		},
		lastReminderDate: {
			type: Date
		},
		trackingNumber: {
			type: String,
			required: true
		}
	}]

});
const Building = mongoose.model('buildings', BuildingSchema);

module.exports = Building;