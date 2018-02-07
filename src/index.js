import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AwaitingParcels from './components/residentView/awaitingParcels';
import PastParcels from './components/residentView/pastParcels';
import NavBar from './components/navBar'
import ActionCardContainer from './components/managerView/actionCardContainer'
import FloorCardContainer from './components/managerAction/floorCardContainer';
import HomeContainer from './components/homePage/homeContainer';


//Create a new component. This component should produce some HTML
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			packages: [{ "carrier": "FedEx", "deliveryDate": "9/27/2017", "pickedUp": false, "pickupDate": "N/A", "trackingNumber": 11425366 },
			{ "carrier": "USPS", "deliveryDate": "6/24/2017", "pickedUp": false, "pickupDate": "N/A", "trackingNumber": 14939207 },
			{ "carrier": "UPS", "deliveryDate": "1/27/2018", "pickedUp": false, "pickupDate": "N/A", "trackingNumber": 19718056 },
			{ "carrier": "OnTrac", "deliveryDate": "1/18/2018", "pickedUp": true, "pickupDate": "4/12/2017", "trackingNumber": 18554945 },
			{ "carrier": "UPS", "deliveryDate": "3/25/2017", "pickedUp": false, "pickupDate": "N/A", "trackingNumber": 16263556 },
			{ "carrier": "OnTrac", "deliveryDate": "8/20/2017", "pickedUp": true, "pickupDate": "10/21/2017", "trackingNumber": 18823390 },
			{ "carrier": "UPS", "deliveryDate": "9/13/2017", "pickedUp": true, "pickupDate": "6/26/2017", "trackingNumber": 11893463 },
			{ "carrier": "USPS", "deliveryDate": "1/25/2018", "pickedUp": true, "pickupDate": "1/4/2018", "trackingNumber": 10848997 },
			{ "carrier": "FedEx", "deliveryDate": "6/4/2017", "pickedUp": true, "pickupDate": "12/19/2017", "trackingNumber": 14586924 },
			{ "carrier": "UPS", "deliveryDate": "10/26/2017", "pickedUp": true, "pickupDate": "7/8/2017", "trackingNumber": 17657130 }
			],
			iconTitles: [
				{ icon: 'add_circle', title: 'New Parcel' },
				{ icon: 'supervisor_account', title: 'Residents' },
				{ icon: 'alarm', title: 'Send Reminder' }
			]
		}
	}

	render() {
		return (
			<div>
				<NavBar />
				{/* <AwaitingParcels packages={this.state.packages} />
				<PastParcels packages={this.state.packages} /> */}
				{/* <ActionCardContainer iconTitles={this.state.iconTitles} /> */}
				{/* <FloorCardContainer /> */}
				<HomeContainer />
			</div>
		);
	}
}

//Take this component generated HTML, and put it, on the page(in the dom)
ReactDOM.render(<App />, document.querySelector('#root'));