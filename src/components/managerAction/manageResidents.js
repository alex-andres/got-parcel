import React from 'react';

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = { author: ‘’, text: ‘’ };
		this.handleAuthorChange = this.handleAuthorChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleAuthorChange(e) {
		this.setState({ author: e.target.value });
	}
	handleTextChange(e) {
		this.setState({ text: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		console.log(`${this.state.author} said “${this.state.text}”`)
		//we will be tying this into the POST method in a bit
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type=’text’ placeholder=’Your name…’ value={this.state.author} onChange={this.handleAuthorChange} />
				<input type=’text’ placeholder=’Say something…’ value={this.state.text} onChange={this.handleTextChange} />
 				<input type=’submit’ value=’Post’ />
 			</form>
		)
	}
}





class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = { tracking_number: ‘’, unit_number: ‘’ }
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
		//we will be tying this into the POST method in a bit
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
												<input id="tracking_number" type="text" required />
												<label for="tracking_number">Tracking#</label>
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
												<input id="unit_number" type="text" className="autocomplete validate" required />
												<label for="unit_number">Unit#</label>
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