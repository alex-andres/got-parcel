import React from 'react';
import CarrierLogo from '../../assets/Carriers';

const ParcelCard = ({ carrier, trackingNumber, deliveryDate, pickedUp, pickupDate }) => {
	return (
		<div className="col s6">
			<div className="card">
				<div className="card-content">
					<div className="row mb-0">
						<div className="col s3">
							<img src={CarrierLogo(carrier)} className="custom-round-image z-depth-5" alt={`${carrier}logo`} />
						</div>
						<div className="col s6">
							<h5>{carrier}</h5>
							<p>Tracking#: {trackingNumber}</p>
							<p>Delivery Date: {deliveryDate}</p>

							{pickupDate !== '' &&
								<p>Pickup Date: {pickupDate}</p>}
						</div>
						<div className="col s3 center">
							<i className={'large material-icons text-lighten-2 ' + (pickedUp ? 'green-text' : 'grey-text')}>check_circle</i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ParcelCard;
