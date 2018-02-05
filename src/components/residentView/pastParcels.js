import React from 'react';
import ParcelCard from './parcelCard'

const PastParcels = ({ packages }) => {
	//create a function that maps the ParcelCard to the Past Parcels container if the parcel object has 
	const Cards = packages.map(() => {
		if (packages.pickupDate) {
			return (
				<ImageCards />
			)

		})
}
return (
	<div class="row">
		<div class="col s12 center primary-color-text retro">
			<div class="divider grey darken-1"></div>
			<h3>Parcels History</h3>
		</div>
	</div>
	<div class="row">
		{Cards}
	</div>
	)
};

export default PastParcels;