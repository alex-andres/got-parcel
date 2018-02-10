import React from 'react';
import ReminderCard from '../components/Manager/ReminderCard';
import moment from 'moment';

const SendReminder = ({ packages }) => {
	const now = moment();
	const Packages = packages.map(shipment => {
		if (!shipment.pickedUp) {
			const deliveryDate = moment(shipment.deliveryDate, 'M/D/YYYY');
			shipment['aging'] = now.diff(deliveryDate, 'days');
			switch (true) {
				case (shipment.aging <= 5):
					shipment['color'] = 'green';
					break;
				case (shipment.aging > 5 && shipment.aging <= 10):
					shipment['color'] = 'orange';
					break;
				case (shipment.aging > 10):
					shipment['color'] = 'red';
					break;
				default:
					shipment['color'] = 'black';
					break;
			};
			return (
				<ReminderCard
					key={shipment.trackingNumber}
					unitNumber={shipment.unitNumber}
					carrier={shipment.carrier}
					trackingNumber={shipment.trackingNumber}
					deliveryDate={shipment.deliveryDate}
					color={shipment.color}
					aging={shipment.aging}
				/>
			);
		};
	});

	return (
		<div>
			<div className="row">
				<div className="col s12 center primary-color-text retro">
					<h3>Send Reminder</h3>
				</div>
			</div>
			<div className="row">
				{Packages}
			</div>
		</div>
	);
};

export default SendReminder;