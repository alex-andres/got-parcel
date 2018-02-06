import React from 'react';

const ActionCard = ({ icon, title }) => {
	return (
		<div className="col s4">
			<a href={(title !== 'New Parcel' ? '#!' : '#parcel_modal')} className={(title === 'New Parcel' ? 'modal-trigger' : '')}>
				< div className="medium card hoverable no-select">
					<div className="card-image card-image-medium primary-color-background center">
						<i className="material-icons white-text icon-full-medium">{icon}</i>
					</div>
					<div className="card-content center">
						<span className="card-title">{title}</span>
					</div>
				</div>
			</a>
		</div >
	)
};

export default ActionCard;