import React from "react";

import rightArrow from "../../../../../assets/sfdc/icons/right-arrow.png";

import "./button.scss";

export default function Button() {
  return (
    <button className="hero-btn">
      Complete Now{" "}
      <img className="arrow-icon" src={rightArrow} alt="right arrow" />
    </button>
  );
}
