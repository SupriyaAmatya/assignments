import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <hr />
        <div className="footer__links">
          <ul className="quick__links">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink exact to="/products-services">Products &amp; Services</NavLink></li>
            <li><NavLink exact to="/blogs">Blogs</NavLink></li>
            <li><NavLink exact to="/whitepapers">Whitepapers</NavLink></li>
            <li><NavLink exact to="/about">About Us</NavLink></li>
            <li><NavLink exact to="/contact">Contact Us</NavLink></li>
          </ul>
          <ul className="social__links">
            <li><a href="https://www.facebook.com"><FaFacebookSquare /></a></li>
            <li><a href="https://www.twitter.com"><FaTwitter /></a></li>
            <li><a href="https://www.linkedin.com"><FaLinkedin /></a></li>
          </ul>
        </div>
        <p className="copyright">Copyright 2020, Aspen Biosciences Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer