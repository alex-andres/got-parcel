import React from 'react';
import FloorCard from './floorCard';

const floors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const FloorCardContainer = () => {
	const FloorCards = floors.map((floor) => {
		return (
			<FloorCard
				floor={floor}
			/>
		)
	})
	return (
		<div>
			<div class="row valign-wrapper">
				<div class="col offset-s2 s8 center primary-color-text retro">
					<h3>Floors</h3>
				</div>
				<div class="col s2 center">
					<a class="btn-floating btn-large waves-effect waves-light green lighten-1 tooltipped modal-trigger" href="#resident_modal" data-position="left" data-delay="20" data-tooltip="Add Resident">
						<i class="material-icons">add</i>
					</a>
				</div>
			</div>
			<div class="row">
				{FloorCards}
			</div>
		</div>
	)
};

export default FloorCardContainer;

