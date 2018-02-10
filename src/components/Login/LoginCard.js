import React, { Component } from 'react';
// import AuthService from '../../utils/AuthService';

class LoginCard extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		// this.Auth = new AuthService();
	};

	// componentWillMount() {
	// 	if (this.Auth.loggedIn()) {
	// 		this.props.history.replace('/');
	// 	}
	// };

	handleFormSubmit(e) {
		e.preventDefault();

		this.Auth.login(this.state.username, this.state.password).then(res => {
			console.log(res);
		}).catch(err => {
			console.log(err);
		});
	};

	handleChange(e) {
		this.setState(
			{
				[e.target.name]: e.target.value
			}
		);
	};

	render() {
		return (
			<div className='row'>
				<div className='col offset-m3 s12 m6'>
					<div className='card'>
						<div className='card-content'>
							<span className='card-title center-align'>Login</span>
							<div className='row'>
								<form className='col s12' onSubmit={this.handleFormSubmit}>
									<div className='row'>
										<div className='input-field col s12'>
											<i className='material-icons prefix'>email</i>
											<input id='email' type='text' name='username' onChange={this.handleChange} />
											<label htmlFor='email'>Email</label>
										</div>
									</div>
									<div className='row'>
										<div className='input-field col s12'>
											<i className='material-icons prefix'>vpn_key</i>
											<input id='password' type='password' name='password' onChange={this.handleChange} />
											<label htmlFor='password'>Password</label>
										</div>
									</div>
									<input className='primary-color-link' type='submit' value='Submit' />
								</form>
							</div>
						</div>
						<div className='card-action'>
							<a className='right primary-color-link modal-trigger' href='#forgot_modal'>Forgot Password</a>
						</div>
					</div>
				</div>
			</div>
		);
	};
};

export default LoginCard;