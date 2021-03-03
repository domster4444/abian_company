import React from 'react';
import logo from '../../img/companyLogo.png';
import BlueGhostBtn from './BlueGhostBtn';
export default function Header() {
  return (
    <>
      <header id="navBar">
        <nav>
          <div id="logoBlock">
            <img src={logo} alt="" />
          </div>
          <div id="menuBlock">
            <ul>
              <li className="cursor poppins_regular_400">Home</li>
              <li className="cursor poppins_regular_400">Services</li>
              <li className="cursor poppins_regular_400">About Us</li>
              <li className="cursor poppins_regular_400">Contact Us</li>
              <BlueGhostBtn />
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
