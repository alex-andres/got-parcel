import React, { Component } from 'react';


class LoginCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}
	render() {
		return (

			<div className="col offset-m3 s12 m6" >
				<div className="card">
					<div className="card-content">
						<span className="card-title center-align">Login</span>
						<div className="row">
							<form className="col s12">
								<div className="row">
									<div className="input-field col s12">
										<i className="material-icons prefix">email</i>
										<input id="email" type="email" className="validate" onChange={(event, newValue) => this.setState({ email: newValue })} />
										<label for="email">Email</label>
									</div>
								</div>
								<div className="row">
									<div className="input-field col s12">
										<i className="material-icons prefix">vpn_key</i>
										<input id="password" type="password" className="validate" onChange={(event, newValue) => this.setState({ password: newValue })} />
										<label for="password">Password</label>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="card-action">
						<a href="#" className="primary-color-link" label="Submit" primary={true} onClick={(event) => this.handleClick(event)}>Login</a>
						<a className="right primary-color-link modal-trigger" href="#forgot_modal">Forgot Password</a>
					</div>
				</div>
			</div>
		);
	}
}
export default LoginCard;