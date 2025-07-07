import React from "react";
import "./Footer.css";
import siriusLogo from "./../images/myImage.jpg";
import googleplay from "../images/googleplay.png";
import appstore from "../images/appstore.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src={siriusLogo} alt="Sirius Logo" className="footer-logo" />
        <div className="footer-columns">
          <div className="column">
            <h4>Company</h4>
            <ul>
              <li>About Sirius</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="column">
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="column">
            <h4>Contact Us</h4>
            <p>support@sirius.am</p>
            <p>+374 (XX) XXX-XXX</p>
          </div>
          <div className="column">
            <h4>Book Anywhere, Anytime</h4>
            <p>Download the Sirius App</p>
            <div className="app-links">
              <img src={appstore} alt="App Store" className="store-logo" />
              <img src={googleplay} alt="Google Play" className="store-logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 SIRIUS. ALL RIGHTS RESERVED • <span>Privacy</span> •{" "}
          <span>Terms</span>
        </p>
        <div className="social-icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
