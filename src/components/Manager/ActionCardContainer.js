import React from 'react';
import ActionCard from './ActionCard';


const ActionCardContainer = ({ iconTitles }) => {
	const ActionCards = iconTitles.map((iconTitle, index) => {
		return (
			<ActionCard
				key={index}
				icon={iconTitle.icon}
				title={iconTitle.title}
				link={iconTitle.link} />
		);
	});

	return (
		<div>
			<div className='row'>
				<div className='col s12 center primary-color-text retro'>
					<h3>Actions</h3>
				</div>
			</div>
			<div className="row">
				{ActionCards}
			</div>
		</div>
	);
};

export default ActionCardContainer;