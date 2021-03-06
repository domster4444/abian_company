import React from 'react';
import logo from '../../img/companyLogo.png';
import BlueGhostBtn from './BlueGhostBtn';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <>
      <header id="navBar">
        <nav>
          <Link to="/">
            <div id="logoBlock">
              <img src={logo} alt="" />
            </div>
          </Link>
          <div id="menuBlock">
            <ul>
              <Link to="/">
                <li className="cursor poppins_regular_400">Home</li>
              </Link>
              <Link to="">
                <li className="cursor poppins_regular_400">Services</li>
              </Link>
              <Link to="">
                <li className="cursor poppins_regular_400">About Us</li>
              </Link>
              <Link to="/login">
                <li className="cursor poppins_regular_400">Login</li>
              </Link>
              <BlueGhostBtn />
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
