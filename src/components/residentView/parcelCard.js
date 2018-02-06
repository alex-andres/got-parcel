import React from 'react';

const ParcelCard = ({ carrier, trackingNumber, deliveryDate, pickedUp, pickupDate }) => {
	return (
		<div className="row">
			<div className="col s6">
				<div className="card">
					<div className="card-content">
						<div className="row mb-0">
							<div className="col s3">
								<img src={`assets/img/Carriers/${carrier}.png`} className="width-40 border-round z-depth-5" alt={`${carrier}logo`} />
							</div>
							<div className="col s6">
								<h5>{carrier}</h5>
								<p>Tracking#: {trackingNumber}</p>
								<p>Delivery Date: {deliveryDate}</p>

								{pickupDate !== 'N/A' &&
									<p>Pickup Date: {pickupDate}</p>}
							</div>
							<div className="col s3 center">
								<i className={'large material-icons text-lighten-2 ' + (pickedUp ? 'green-text' : 'grey-text')}>check_circle</i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default ParcelCard;
