import React from 'react';
import { Link } from 'react-router-dom';

const FirstPage = ({ icon, title, link }) => {
	return (
		<div className="col s4 offset-s2">
			<Link to={link}>
				<div className="medium card hoverable no-select">
					<div className="card-image card-image-medium primary-color-background center">
						<i className="material-icons white-text icon-full-medium">{icon}</i>
					</div>
					<div className="card-content center">
						<span className="card-title">{title}</span>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default FirstPage;