import React from 'react';
import { Link } from 'react-router-dom';

const FloorCard = ({ floor }) => {
	return (
		<div className="col s3">
			<Link to={`/manager/residents/floor-${floor}`}>
				<div className="small card hoverable no-select">
					<div className="card-image card-image-small primary-color-background center">
						<span className="white-text floor-full-small">{floor}</span>
					</div>
					<div className="card-content center">
						<span className="card-title">Floor {floor}</span>
					</div>
				</div>
			</Link>
		</div>
	)
};

export default FloorCard;