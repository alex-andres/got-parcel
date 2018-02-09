import React from 'react';
import LoginCard from './LoginCard';


const HomeContainer = () => {
	return (
		<div>
			<div className="row">
				<div className="col s12 center primary-color-text retro">
					<h3>Parcel Delivery Notification</h3>
				</div>
			</div>
			<div className="row">
				<LoginCard />
			</div>
		</div>
	);
};

export default HomeContainer;