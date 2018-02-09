import React from 'react';
import LoginCard from './LoginCard';


const HomeContainer = ({ LoginCard }) => {
	return (
		<div>
			<div class="row">
				<div class="col s12 center primary-color-text retro">
					<h3>Parcel Delivery Notification</h3>
				</div>
			</div>
			<div class="row">
				{LoginCard}
			</div>
		</div>
	);
};

export default HomeContainer;