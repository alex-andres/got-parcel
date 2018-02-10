import React from 'react';

const UnitCard = ({ unitNumber, firstName, lastName, phoneNumber, email }) => {
	return (
		<div class="col s4">
			<div class="card hoverable no-select">
				<div class="card-image card-image-small primary-color-background center">
					<a href="#!">
						<span class="white-text unit-full-small">{unitNumber}</span>
					</a>
					<a class="btn-floating halfway-fab waves-effect waves-light secondary-color-background"><i class="material-icons">edit</i></a>
					<a class="btn-floating halfway-fab waves-effect waves-light red lighten-2 left"><i class="material-icons">delete</i></a>
				</div>
				<div class="card-content">
					<div class="row valign-wrapper">
						<div class="input-field col s6">
							<input disabled value={firstName} id="first_name" type="text" class="validate" />
							<label for="first_name">First Name</label>
						</div>
						<div class="input-field col s6">
							<input disabled value={lastName} id="last_name" type="text" class="validate" />
							<label for="last_name">Last Name</label>
						</div>
					</div>
					<div class="row valign-wrapper">
						<div class="input-field col s6">
							<input disabled value={phoneNumber} id="phone_number" type="tel" class="validate" />
							<label for="phone_number">Phone#</label>
						</div>
						<div class="input-field col s6">
							<input disabled value={unitNumber} id="unit_number" type="text" class="autocomplete" />
							<label for="unit_number">Unit Number</label>
						</div>
					</div>
					<div class="row">
						<div class="input-field col s12">
							<input disabled value={email} id="email" type="email" class="validate" />
							<label for="email">Email</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default UnitCard;