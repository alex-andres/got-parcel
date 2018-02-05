import React from 'react';

const FloorCard = ({ floors }) => {
	return (
		<div className="col s3">
			<a href="#!">
				<div className="small card hoverable no-select">
					<div className="card-image card-image-small primary-color-background center">
						<span className="white-text floor-full-small">{floors.number}</span>
					</div>
					<div className="card-content center">
						<span className="card-title">Floor {floors.number}</span>
					</div>
				</div>
			</a>
		</div>
	)
};

export default FloorCard;