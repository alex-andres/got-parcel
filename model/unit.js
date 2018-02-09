const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UnitSchema = new schema({
	unitNumber: String,
	buildingId: String,
	packages: Array

});
const User = mongoose.model('units', UnitSchema);

module.exports = User;