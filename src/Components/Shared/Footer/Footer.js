import React from "react";
import "./Footer.scss";
import yunusLogo from "../../../assets/yunus_center.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className="main-footer d-flex align-items-center justify-content-between position-relative" id="contactRoute">
            <div className="footer-logo">
                <img src={yunusLogo} alt="yunus-logo" />
            </div>
            <div className="footer-content">
                <h5><FontAwesomeIcon icon={faMapMarkerAlt} /> Fine Us At</h5>
                <p>Grameen Bank Bhaban <br/> Contact info@yy.ventures</p>
            </div>
            <div className="footer-leaf">
                <h5><FontAwesomeIcon icon={faEnvelope} /> Write To Us</h5>
                <p className="leaf-para-one">info@yy.ventures</p><p className="leaf-para-two">info@yunuscentre.org</p>
                <h5><FontAwesomeIcon icon={faWhatsapp} /> +880 1810-061591</h5>
            </div>
        </footer>
    );
};

export default Footer;
