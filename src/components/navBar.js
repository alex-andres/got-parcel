import React from 'react'

const NavBar = () => {
	return (
		<div className="navbar-fixed">
			<nav className="secondary-color-background">
				<div className="nav-wrapper container">
					<a href="#!" className="brand-logo flow-text">
						<div className="valign-wrapper">
							<img src="assets/img/logo-box@4x.png" alt="GotParcel" />
							<span className="flow-text text-bold">Got Parcel</span>
						</div>
					</a>
					<ul className="right hide-on-med-and-down">
						<li>
							<a className="modal-trigger" href="#profile_modal">Update Profile</a>
						</li>
						<li>
							<a href="#!">Log Out</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default NavBar