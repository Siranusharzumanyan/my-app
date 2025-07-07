
import React from "react";
import "./FeaturedCard.css";
import edenImage from "../images/container4-image.jpg"; 

function FeaturedCard() {
  return (
    <div className="featured-card" style={{ backgroundImage: `url(${edenImage})` }}>
      <div className="card-overlay">
        <div className="top-labels">
          <div className="serenity-label">
            <span>Serenity</span>
          </div>
          <div className="popular-label">
            Popular
          </div>
        </div>
        <div className="card-content">
          <h3>EDEN BY SIROON MINAS</h3>
          <p className="category">Beauty Center</p>
          <p className="address">📍 Gevorg Kochar 21, Yerevan, Armenia</p>
          <div className="rating-section">
            <span>⭐ 5.0</span>
            <a href="/" className="view-more">VIEW MORE →</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
