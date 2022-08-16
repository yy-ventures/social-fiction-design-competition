import React from "react";
import "./Footer.scss";
import yunusLogo from "../../../assets/images/logos/yc-white.png";
import yyvLogo from "../../../assets/images/logos/yyv-white.png";
import facebookIcon from "../../../assets/icon/facebook.png";
import whatsappIcon from "../../../assets/icon/whatsApp.png";
import webIcon from "../../../assets/icon/website.png";
import upArrowIcon from "../../../assets/icon/up-arrow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="main-footer" id="contactRoute">
      <div className="main-footer__container">
        <div className="brought-by">
          <h3>Brought to you by</h3>
          <div className="logo-container">
            <a href="/">
              <img src={yunusLogo} alt="yunus-logo" />
            </a>
            <a href="https://yy.ventures/" target="__blank">
              <img src={yyvLogo} alt="yyv-logo" />
            </a>
          </div>
          <span className="reserved-1">
            © 2022 Yunus Centre. All rights reserved.
          </span>
        </div>
        <div className="find-us">
          <h3>Find us at</h3>
          <p>A: 16th Floor,</p>
          <p>Grameen Bank Bhaban,</p>
          <p>Mirpur - 2, Dhaka - 1216,</p>
          <p>Bangladesh</p>
        </div>
        <div className="write-us">
          <h3>Write to us</h3>
          <p>E: info@yunuscentre.org</p>
          <p>WhatsApp: +880 1810-061591 </p>
          <div className="media-container">
            <a href="https://www.facebook.com/YunusCentre" target="__blank">
              <img src={facebookIcon} alt="facebook-icon" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=8801810061591"
              target="__blank"
            >
              <img
                className="whatsapp-icon"
                src={whatsappIcon}
                alt="whatsapp-icon"
              />
            </a>
            <a href="https://www.muhammadyunus.org/" target="__blank">
              <img src={webIcon} alt="web-icon" />
            </a>
          </div>
        </div>
        <span className="reserved-2">
          © 2022 Yunus Centre. All rights reserved.
        </span>
      </div>
      <div className="main-footer__arrow-container">
        <a href="#">
          <img src={upArrowIcon} alt="arrow icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
