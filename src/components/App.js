
import React, { Component } from 'react';
import AuthService from './HomePage/AuthService';
import WithAuth from './HomePage/WithAuth';
import HomeContainer from './HomePage/HomeContainer';
import NavBar from './NavBar';
import Resident from './ResidentView/Resident';
import { Packages, IconTitles, Info } from '../temp/MOCK_DATA(1).json';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Auth = new AuthService();

// import ActionCardContainer from './components/managerView/actionCardContainer';
// import FloorCardContainer from './components/managerAction/floorCardContainer';
// import ParcelModal from './ManagerView/ParcelModal';
// import UnitCardContainer from './components/managerAction/unitCardContainer';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Info,
			Packages,
			IconTitles
			// isModalOn: false
		};
	};

	handleLogout() {
		Auth.logout();
		this.props.history.replace('/login');
	};

	loadLogin() {
		return <HomeContainer />;
	};

	loadResidet() {
		return <Resident packages={this.state.Packages} />;
	};

	// handleClick() {
	// 	this.setState({ isModalOn: !this.state.isModalOn })
	// }

	render() {
		// const {
		// 	isModalOn
		// } = this.state
		return (
			<Router>
				<div>
					<NavBar handleLogout={this.handleLogout} />
					{/* <button onClick={() => this.handleClick()}>Click</button> */}
					<Route exact path='/login' component={() => this.loadLogin()} />

					{/* {isModalOn && <ParcelModal />} */}
					<Route exact path='/resident' component={() => this.loadResidet()} />
				</div>
				{/* <AwaitingParcels packages={this.state.Packages} /> */}
				{/* <PastParcels packages={this.state.Packages} /> */}
				{/* <ActionCardContainer iconTitles={this.state.IconTitles} /> */}
				{/* <FloorCardContainer /> */}
				{/* <HomeContainer /> */}
				{/* <UnitCardContainer info={this.state.Info} /> */}
			</Router>
		);
	}
}

export default App;