
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom';

// import AuthServices from '../utils/AuthServices';

// const AuthService = new AuthServices('http://localhost:3001');


import NavBar from './NavBar';
import Login from '../pages/Login';
import Resident from '../pages/Resident';
import Manager from '../pages/Manager';
import NewParcel from '../pages/NewParcel';
import ManageResidents from '../pages/ManageResidents';
import SendReminder from '../pages/SendReminder';
import FirstPage from '../temp/FirstPage';
import Units from '../pages/Units';
import { Packages, IconTitles, Info } from '../temp/MockData.json';

// const Auth = new AuthService();

// const userAuth = {
// 	isResident: false,
// 	isManager: false,
// 	authenticate(cb) {
// 		this.isAuthenticated = true;
// 		setTimeout(cb, 100); // fake async
// 	},
// 	signout(cb) {
// 		this.isAuthenticated = false;
// 		setTimeout(cb, 100);
// 	}
// };

// const PrivateRoute = ({ compnent: Component, ...rest }) => {
// 	<Route {...rest} render={props =>
// 		AuthService ?
// 	}
// };
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			redirectToReferrer: false,
			isAuthenticated: false
			// isModalOn: false
		};
	};



	// authenticate() {

	// };

	loadResidet() {
		return <Resident packages={Packages} />;
	};

	loadManager() {
		return <Manager iconTitles={IconTitles} />;
	};

	loadFirstPage() {
		return (
			<div className='row'>
				<div className="col s12">

					<div className="row"></div>

					<FirstPage
						icon='contacts'
						title='Resident View'
						link='/resident'
					/>
					<FirstPage
						icon='vpn_key'
						title='Manager View'
						link='/manager'
					/>
				</div>
			</div>

		);
	}

	// // handleClick() {
	// // 	this.setState({ isModalOn: !this.state.isModalOn })
	// // }

	loadReminders() {
		return (
			<SendReminder packages={Packages} />
		);
	};

	loadUnits() {
		return (
			<Units info={Info} />
		);
	}
	render() {
		// const {
		// 	isModalOn
		// } = this.state
		return (
			<Router>
				<div>
					<NavBar />
					<Route exact path='/' component={() => this.loadFirstPage()} />
					<Route exact path='/resident' component={() => this.loadResidet()} />
					<Route exact path='/manager' component={() => this.loadManager()} />
					<Route exact path='/manager/new-parcel' component={NewParcel} />
					<Route exact path='/manager/residents' component={ManageResidents} />
					<Route exact path='/manager/residents/floor-1' component={() => this.loadUnits()} />
					<Route exact path='/manager/reminders' component={() => this.loadReminders()} />
				</div>
			</Router>
		);
	}
}


export default App;

{/* <button onClick={() => this.handleClick()}>Click</button>
{isModalOn && <ParcelModal />}
<AwaitingParcels packages={this.state.Packages} />
<PastParcels packages={this.state.Packages} />
<ActionCardContainer iconTitles={this.state.IconTitles} />
<FloorCardContainer />
<Login />
<UnitCardContainer info={this.state.Info} /> */}