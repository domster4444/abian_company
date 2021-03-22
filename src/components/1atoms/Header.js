import React from 'react';
import logo from '../../img/companyLogo.png';
import BlueGhostBtn from './BlueGhostBtn';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <>
      <header id="navBar">
        <nav>
          <a href="/">
            <div id="logoBlock">
              <img src={logo} alt="" />
            </div>
          </a>
          <div id="menuBlock">
            <ul>
              <a href="/">
                <li className="cursor poppins_regular_400">Home</li>
              </a>
              <Link to="/service">
                <li className="cursor poppins_regular_400">Services</li>
              </Link>
              <Link to="/process">
                <li className="cursor poppins_regular_400">Process</li>
              </Link>
              <Link to="">
                <li className="cursor poppins_regular_400">About Us</li>
              </Link>
              <Link to="/login">
                <li className="cursor poppins_regular_400">Login</li>
              </Link>
              <Link to="/signup">
                <li className="cursor poppins_regular_400">
                  <BlueGhostBtn name="Sign Up" />
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
