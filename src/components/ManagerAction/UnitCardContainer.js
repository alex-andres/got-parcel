import React from 'react';
import UnitCard from './unitCard';


const UnitCardContainer = ({ info }) => {
	const UnitCards = info.map((resident) => {
		return (
			<UnitCard
				unitNumber={resident.unitNumber}
				firstName={resident.firstName}
				lastName={resident.lastName}
				phoneNumber={resident.phoneNumber}
				email={resident.email}
			/>
		);
	});
	return (
		<div>
			<div class="row valign-wrapper">
				<div class="col s12 center primary-color-text retro">
					<h3>Floor 1 Units</h3>
				</div>
			</div>
			<div class="row">
				{UnitCards}
			</div>
		</div>
	);
};

export default UnitCardContainer;