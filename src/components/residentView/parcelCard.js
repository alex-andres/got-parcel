import React from 'react';

const ParcelCard = ({ packages }) => {
	return (
		<div className="row">
			<div className="col s6">
				<div className="card">
					<div className="card-content">
						<div className="row mb-0">
							<div className="col s3">
								<img src={`assets/img/Carriers/${packages.carrier}.png`} className="width-40 border-round z-depth-5" alt="fedex logo" />
							</div>
							<div className="col s6">
								<h5>{packages.carrier}</h5>
								<p>Tracking#: {packages.trackingNumber}</p>
								<p>Delivery Date: {packages.deliveryDate}</p>
							</div>
							<div className="col s3 center">
								<i className={'large material-icons text-lighten-2 ' + (packages.pickedUp ? 'green-text' : 'grey-text')}>check_circle</i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default ParcelCard;
