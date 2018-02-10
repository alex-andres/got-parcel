
const mongoose = require('mongoose');
const schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

const UserSchema = new schema({
	email: String,
	password: String,
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

UserSchema.pre('save', function (next) {
	var user = this;
	if (!user.isModified('password')) return next();

	bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
		if (err) return next(err);

		bcrypt.hash(user.password, salt, function (err, hash) {
			if (err) return next(err);

			user.password = hash;
			next();
		});
	});
});

const User = mongoose.model('users', UserSchema);

module.exports = User;

