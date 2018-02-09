import React from 'react';
import ParcelCard from './ParcelCard';

const AwaitingParcels = ({ shipments }) => {
	//create a function that maps the ParcelCard to the Past Parcels container if the parcel object has 
	const AwaitingCards = shipments.map((shipment) => {
		return (
			<ParcelCard
				key={shipment.trackingNumber}
				carrier={shipment.carrier}
				trackingNumber={shipment.trackingNumber}
				deliveryDate={shipment.deliveryDate}
				pickedUp={shipment.pickedUp}
				pickupDate={shipment.pickupDate}
			/>
		);
	});


	if (AwaitingCards.length > 0) {
		return (
			<div>
				<div className="row">
					<div className="col s12 center primary-color-text retro">
						<div className="divider grey darken-1"></div>
						<h3>Awaiting Parcels</h3>
					</div>
				</div>
				<div className="row">
					{AwaitingCards}
				</div>
			</div>
		);
	} else {
		return (
			<div></div>
		);
	}
};

export default AwaitingParcels;