import React from 'react';
import ActionCard from './actionCard'


const iconTitles = [
	{ icon: 'add_circle', title: 'New Parcel' },
	{ icon: 'supervisor_account', title: 'Residents' },
	{ icon: 'alarm', title: 'Send Reminder' }
]

const ActionCardContainer = ({ iconTitles }) => {
	const ActionCards = iconTitles.map((icontite, index) => {
		return (
			<ActionCard
				key={index}
				icon={icontite.icon}
				title={icontite.title}
			/>
		)
	})
	return (
		<div>
			<div className="row">
				<div className="col s12 center primary-color-text retro">
					<h3>Actions</h3>
				</div>
			</div>
			<div className="row">
				{ActionCards}
			</div>
		</div>
	)
};

export default ActionCardContainer;