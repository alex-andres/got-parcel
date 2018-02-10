import jwt from 'jwt';
import axios from 'axios';

const secret = process.env.JWT_SECRET;

class AuthService {
	constructor(domain) {
		this.domain = domain || 'http://localhost:3001';
		this.login = this.login.bind(this);
		this.getProfile = this.getProfile.bind(this);
		this.logout = this.logout.bind(this);
	};

	login(username, password) {
		// Obtain token from backend
		axios.post(this.domain, JSON.stringify({ username, password }), {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		}).then(res => {
			console.log(res.headers);
			this.setToken(res.headers['x-auth']);
			return Promise.resolve(res);
		});
	};

	getProfile() {
		return !!jwt.verify(this.getToken(), secret) ? jwt.verify(this.getToken(), secret) : false;
	}

	// authenticateToken() {
	// 	if (!!this.getToken) {
	// 		axios.get(`${this.domain}/authenticate`, { headers: { 'X-Auth': this.getToken() } }).then(res => { 

	// 		})
	// 	}
	// }

	setToken(idToken) {
		// Saves user token to localStorage
		localStorage.setItem('id_token', idToken);
	};

	getToken() {
		// Retrieves the user token from localStorage
		return localStorage.getItem('id_token');
	};

	logout() {
		// Clear user token and profile data from localStorage
		axios.delete(`${this.domain}/logout`, { headers: { 'X-Auth': this.getToken() } }).then(res => {
			return status === 200 ? (localStorage.removeItem('id_token'), res.status) : res.status;
		});
	};
};


export default AuthService;