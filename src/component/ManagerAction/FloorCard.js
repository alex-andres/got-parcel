import React from 'react';

const FloorCard = ({ floor }) => {
	return (
		<div className="col s3">
			<a href="#!">
				<div className="small card hoverable no-select">
					<div className="card-image card-image-small primary-color-background center">
						<span className="white-text floor-full-small">{floor}</span>
					</div>
					<div className="card-content center">
						<span className="card-title">Floor {floor}</span>
					</div>
				</div>
			</a>
		</div>
	)
};

export default FloorCard;