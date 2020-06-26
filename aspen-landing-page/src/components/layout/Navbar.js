import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

class Navbar extends Component {
  state={
    isOpen: false
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div className="navbar__wrapper">
        <div className="navbar__container">
          <div className="responsive-bar" onClick={this.handleClick}>
            <FaBars style={{ width: '26px', height: '26px' }} />
          </div>
          <div className="main__navbar">
            <div className="logo__wrapper">
              <a href="/"><img src={logo} className="logo" alt="logo" /></a>
            </div>
            <ul className={this.state.isOpen ? 'nav__links showNav' : 'nav__links'}>
              <li><NavLink activeClassName="is-active" exact to="/">home</NavLink></li>
              <li><NavLink activeClassName="is-active" exact to="/products-services">products &amp; services </NavLink></li>
              <li><NavLink activeClassName="is-active" exact to="/resources">resources</NavLink></li>
              <li><NavLink activeClassName="is-active" exact to="/about-us">about us</NavLink></li>
            </ul>
          </div>
          <ul className="contact__links">
            <li><Link to="/"><FaTwitter style={{ width: '18px', height: '18px' }} /></Link></li>
            <li><Link to="/"><FaLinkedin style={{ width: '18px', height: '18px' }} /></Link></li>
            <li><NavLink activeClassName="is-active" exact to="/contact">contact us</NavLink></li>
          </ul>
        </div>
      </div>
    )

  }
}

export default Navbar
