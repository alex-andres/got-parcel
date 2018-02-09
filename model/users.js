
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
	email: String,
	fname: String,
	lname: String,
	phone: {
		number: string,
		isCell: boolean
	},
	role: String,
	buildingId: String,
	unitNumber: String


});

const User = mongoose.model('users', UserSchema);

module.exports = User;