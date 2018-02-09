import React from 'react';

import AwaitingParcels from './AwaitingParcels';
import PastParcels from './PastParcels';

const Packages = ({ packages }) => {
	const Awaiting = [];
	const Past = [];
	packages.map(pack => {
		if (!pack.pickedUp) {
			Awaiting.push(pack);
		};
		if (pack.pickedUp) {
			Past.push(pack);
		};
	});

	return (
		<div>
			<AwaitingParcels shipments={Awaiting} />
			<PastParcels shipments={Past} />
		</div>
	);
};

export default Packages;
