import React from "react";
import "./ImgContainer.css";
import bgImage from "../../../images/container4-image.jpg";
import PopularBtn from "../Popular/PopularBtn";

export default function TestComponent() {
  return (
    <div className="test-component-container">
      <div className="test-component-content">
        <img src={bgImage} alt="Backgroundg" />
      </div>
      <PopularBtn />
    </div>
  );
}
