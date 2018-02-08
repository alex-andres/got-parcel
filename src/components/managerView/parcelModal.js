import React, { Component } from 'react';

class ParcelModal extends Component {
	constructor(props) {
		super(props);
		this.state = { tracking_number: "", unit_number: "" }
		this.handleTrackingChange = this.handleTrackingChange.bind(this);
		this.handleUnitChange = this.handleUnitChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleTrackingChange(e) {
		this.setState({ tracking_number: e.target.value });
	}
	handleUnitChange(e) {
		this.setState({ unit_number: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		console.log(`tracking number:${this.state.tracking_number}, unit number “${this.state.unit_number}”`)
	}
	render() {
		return (
			<div id="parcel_modal" className="modal" >
				<div className="modal-content">
					<h4>Scan Parcel</h4>
					<div className="row">
						<div className="col s12">
							<ul className="stepper horizontal">
								<li className="step active">
									<div className="step-title waves-effect">Tracking#</div>
									<div className="step-content">
										<div className="row">
											<div className="input-field col s12">
												<input id="tracking_number" type="text" required onChange={(event, newValue) => this.setState({ tracking_number: newValue })} />
												<label htmlFor="tracking_number">Tracking#</label>
											</div>
										</div>
										<div className="step-actions">
											<button className="waves-effect waves-dark btn next-step">Unit#</button>
										</div>
									</div>
								</li>
								<li className="step">
									<div className="step-title waves-effect">Unit#</div>
									<div className="step-content">
										<div className="row">
											<div className="input-field col s12">
												<input id="unit_number" type="text" className="autocomplete validate" required onChange={(event, newValue) => this.setState({ unit_number: newValue })} />
												<label htmlFor="unit_number">Unit#</label>
											</div>
										</div>
										<div className="step-actions">
											<button className="waves-effect waves-dark btn" type="submit">Finish</button>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
};

export default ParcelModal;