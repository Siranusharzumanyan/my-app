import React from "react";
import "./Container4.css";
import FeaturedCard from "./FeaturedCard"; 

import frame1 from "../images/Frame1.jpg";
import frame2 from "../images/Frame2.jpg";
import frame3 from "../images/Frame3.jpg";
import frame4 from "../images/Frame4.jpg";
import frame5 from "../images/Frame5.jpg";
import frame6 from "../images/Frame6.jpg";
import frame7 from "../images/Frame7.jpg";
import frame8 from "../images/Frame8.jpg";
import frame9 from "../images/Frame9.jpg";

const cardImages = [
  frame1,
  frame2,
  frame3,
  frame4,
  frame5,
  frame6,
  frame7,
  frame8,
  frame9,
];

function Container4() {
  return (
    <section className="container4">
      <div className="c4-header">
        <h1>FIND THE BEST PLACES FOR BEAUTY, WELLNESS & FITNESS</h1>
        <p>Browse top‑rated companies in your area, and book online with ease.</p>
        <button className="view-services">VIEW SERVICES →</button>
      </div>

     
      <FeaturedCard />

      <div className="filters-row">
        <input
          type="text"
          placeholder="Search by company, service, or specialist"
        />
        <select>
          <option>Select location</option>
        </select>
        <select>
          <option>Choose a category</option>
        </select>
      </div>

      <div className="card-grid">
        {cardImages.map((imgSrc, index) => (
          <div className="card" key={index + 1}>
            <img src={imgSrc} alt={`Card ${index + 1}`} />
            <div className="info">
              <h3>Beauty Center</h3>
              <p>By SIROON MINAS</p>
              <p>📍 Yerevan</p>
              <p>⭐ 5.0</p>
              <button className="view-more">VIEW MORE →</button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button className="prev">&lt; Prev</button>
        <button className="page active">1</button>
        <button className="page">2</button>
        <button className="page">3</button>
        <button className="page">4</button>
        <button className="page">5</button>
        <button className="next">Next &gt;</button>
      </div>
    </section>
  );
}

export default Container4;