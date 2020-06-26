import React from 'react';
import logo from '../../assets/images/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Navbar() {
	return (
		<div className="navbar__wrapper">
			<div className="container">
				<div className=" navbar__container">
					<div className="main__navbar">
						<div className="logo__wrapper">
							<img src={logo} className="logo" alt="logo" />
						</div>
						<ul className="nav__links">
							<li><NavLink exact to="/">home</NavLink></li>
							<li><NavLink exact to="/products-services">products &amp; services </NavLink></li>
							<li><NavLink exact to="/resources">resources</NavLink></li>
							<li><NavLink exact to="/about-us">about us</NavLink></li>
						</ul>
					</div>
					<ul className="contact__links">
						<li><Link to="/"><FaTwitter /></Link></li>
						<li><Link to="/"><FaLinkedin /></Link></li>
						<li><NavLink exact to="/">contact us</NavLink></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar
