
import React, { Component } from 'react';
import NavBar from './NavBar';
import Residents from './ResidentView/Residents';
// import ActionCardContainer from './components/managerView/actionCardContainer';
// import FloorCardContainer from './components/managerAction/floorCardContainer';
// import HomeContainer from './components/homePage/homeContainer';
// import ParcelModal from './components/managerView/parcelModal';
// import UnitCardContainer from './components/managerAction/unitCardContainer';
import { Packages, IconTitles, Info } from '../temp/MOCK_DATA(1).json';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Info,
			Packages,
			IconTitles,
			isEditable: 'false'
		};
	}

	render() {
		return (
			<div>
				<NavBar />

				<Residents packages={this.state.Packages} />
				{/* <AwaitingParcels packages={this.state.Packages} /> */}
				{/* <PastParcels packages={this.state.Packages} /> */}
				{/* <ActionCardContainer iconTitles={this.state.IconTitles} /> */}
				{/* <FloorCardContainer /> */}
				{/* <HomeContainer /> */}
				{/* <ParcelModal /> */}
				{/* <UnitCardContainer info={this.state.Info} /> */}
			</div>
		);
	}
}

export default App;