import React from "react";

import rightArrow from "../../../../../assets/sfdc/icons/right-arrow.png";

import "./button.scss";

export default function Button({ link }) {
  return (
    <a href={link} className="hero-btn" target="__blank">
      Complete Now{" "}
      <img className="arrow-icon" src={rightArrow} alt="right arrow" />
    </a>
  );
}
