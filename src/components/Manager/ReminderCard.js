import React, { Component } from 'react';

class ReminderCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			reminderSent: false,
			latestReminder: '',
			aging: 0,
			color: ''
		};
	};

	render() {
		return (
			<div className="col s6">
				<a href="#!">
					<div className="card card-clickable no-select">
						<div className="card-content">
							<div className="row mb-0 valign-wrapper">
								<div className="col s3">
									<p className="custom-round-unit center-align flow-text secondary-color-background white-text z-depth-5">{this.props.unitNumber}</p>
								</div>
								<div className="col s6">
									<h5>{this.props.carrier}</h5>
									<p>Tracking#: {this.props.trackingNumber}
									</p>
									<p>Delivery Date: {this.props.deliveryDate}</p>
								</div>
								<div className="col s3 center">
									<p className={`flow-text ${this.props.color}-text text-lighten-2 text-bold`}>{this.props.aging} Days</p>
								</div>
							</div>
						</div>
					</div>
				</a>
			</div>
		);
	};
};

export default ReminderCard;