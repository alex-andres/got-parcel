const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UnitSchema = new schema({
	buildingId: String,
	units: {
		type: Array, "default": []
	}

	/* [ {
					unitNumber:"123",
					residentId: "45647576859",
					packages: [
						{
							carrier: "Fedex",
							deliveryDate: "02/01/2018 2:30PM",
							pickedUp: false,
							pickedUpDate: ,
							trackingNumber: "234567891"
						},
						{
							carrier: "Fedex",
							deliveryDate: "02/01/2018 2:30PM",
							pickedUp: true,
							pickedUpDate: "02/01/2018 8:30PM",
							trackingNumber: "204667891"
						}
					]
				} , .....
				
			]
	*/

});
const Unit = mongoose.model('units', UnitSchema);

module.exports = Unit;