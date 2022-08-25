import React from "react";

import facebookIcon from "../../../../../assets/icon/facebook.png";
import whatsappIcon from "../../../../../assets/icon/whatsApp.png";
import webIcon from "../../../../../assets/icon/website.png";

import "./media.scss";

function Media() {
  return (
    <div className="media-container">
      <a href="https://www.facebook.com/YunusCentre" target="__blank">
        <img src={facebookIcon} alt="facebook-icon" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=8801810061591"
        target="__blank"
      >
        <img className="whatsapp-icon" src={whatsappIcon} alt="whatsapp-icon" />
      </a>
      <a href="https://www.muhammadyunus.org/" target="__blank">
        <img src={webIcon} alt="web-icon" />
      </a>
    </div>
  );
}

export default Media;
