import React from 'react';
import ParcelCard from './parcelCard';

const AwaitingParcels = ({ packages }) => {
	//create a function that maps the ParcelCard to the Past Parcels container if the parcel object has 
	const AwaitingCards = packages.map((pack) => {
		if (!pack.pickedUp) {
			return (
				<ParcelCard
					key={pack.trackingNumber}
					carrier={pack.carrier}
					trackingNumber={pack.trackingNumber}
					deliveryDate={pack.deliveryDate}
					pickedUp={pack.pickedUp}
					pickupDate={pack.pickupDate}
				/>
			)
		}
	})

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
	)
};

export default AwaitingParcels;