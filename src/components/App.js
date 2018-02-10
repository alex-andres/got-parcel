
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import AuthService from '../utils/AuthService';
import WithAuth from '../utils/WithAuth';

import NavBar from './NavBar';
import Login from '../pages/Login';
import Resident from '../pages/Resident';
import Manager from '../pages/Manager';
import NewParcel from '../pages/NewParcel';
import ManageResidents from '../pages/ManageResidents';
import SendReminder from '../pages/SendReminder';

import { Packages, IconTitles, Info } from '../temp/MockData.json';

const Auth = new AuthService();

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// isModalOn: false
		};
	};

	loadLogin() {
		return <Login />;
	};

	loadResidet() {
		return <Resident packages={Packages} />;
	};

	loadManager() {
		return <Manager iconTitles={IconTitles} />;
	};

	// handleClick() {
	// 	this.setState({ isModalOn: !this.state.isModalOn })
	// }

	loadReminders() {
		return <SendReminder packages={Packages} />;
	};

	render() {
		// const {
		// 	isModalOn
		// } = this.state
		return (
			<Router>
				<div>
					<NavBar />
					<Route exact path='/resident' component={() => this.loadResidet()} />
					<Route exact path='/manager' component={() => this.loadManager()} />
					<Route exact path='/manager/new-parcel' component={NewParcel} />
					<Route exact path='/manager/residents' component={ManageResidents} />
					{/* <Route exact path='/manager/residents/floor-:floor' component={} /> */}
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