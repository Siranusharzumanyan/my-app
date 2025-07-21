import React from "react";
import "./Featurecard.css";
import backgroundImage from "../images/container4-image.jpg";
import starIcon from "../images/Icon.png";
import profileImage from "../images/image.png";

function Featurecard() {
  return (
    <div
      className="feature-card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <p className="by-minas">
          <h2>EDEN BY SIROON MINAS/</h2>
          <img src={profileImage} alt="Profile" className="profile-icon" />
        </p>
        <p>Beauty Centere</p>
        <p> Gevorg Qochar 21, Yerevan, Armenia</p>

        <div className="rating">
          <img src={starIcon} alt="Star" />
          <span>5.0</span>
        </div>

        <button className="view-more">VIEW MORE →</button>
      </div>
    </div>
  );
}

export default Featurecard;
