import React from "react";
import "./../styles/Header.css";
import logo from "./../images/myImage.jpg";
import { FiCalendar, FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      
      <div className="top-bar">
        <div className="toggle-options">
          <span>For Businesses</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <span>For Individuals</span>
        </div>
        <div className="right-options">
          <span className="phone">+374 (XX) XXX-XXX</span>
          <select className="lang-select">
            <option value="en">EN</option>
            <option value="hy">HY</option>
          </select>
        </div>
      </div>

     <nav className="main-nav">
  <div className="logo-section">
    <button className="menu-toggle">
      <span className="menu-bar"></span>
      <span className="menu-bar"></span>
      <span className="menu-bar"></span>
    </button>
    <img src={logo} alt="Sirius Logo" className="logo" />
  </div>

         <ul className="nav-links">
          <li>Home</li>
          <li>Companies</li>
          <li>Services</li>
          <li>Specialist</li>
          <li>Contact Us</li>
        </ul>

        <div className="nav-extras">
          <button className="login">Sign in</button>

          <div className="search-box">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Search..." />
          </div>

          <FiCalendar className="calendar-icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
