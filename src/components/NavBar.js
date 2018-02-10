import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const NavBar = ({ handleLogout }) => {
	return (
		<div className="navbar-fixed">
			<nav className="secondary-color-background">
				<div className="nav-wrapper container">
					<Link to='/'>
						<span className="brand-logo flow-text">
							<div className="valign-wrapper">
								<img src={Logo} alt="GotParcel" />
								<span className="flow-text text-bold">Got Parcel</span>
							</div>
						</span>
					</Link>
					<ul className="right hide-on-med-and-down">
						<li>
							<a className="modal-trigger" href="#profile_modal">Update Profile</a>
						</li>
						<li>
							<a href='#!' onClick={() => handleLogout()}>Log Out</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;