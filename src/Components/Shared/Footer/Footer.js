import React from 'react';
import "./Footer.scss";
import yunusLogo from "../../../assets/yunus_center.png";
import leafLogo from "../../../assets/leaf_logo.png";

const Footer = () => {
    return (
        <footer className="main-footer d-flex align-items-center justify-content-between position-relative">
            <div className="footer-logo">
                <img src={yunusLogo} alt="yunus-logo"/>
                <p>&copy;2021 YunusCentre.org</p>
            </div>
            <div className="footer-content">
                <p>For More Information</p>
                <p>Contact info@yy.ventures</p>
            </div>
            <div></div>
            <div className="footer-leaf">
                <img src={leafLogo} alt="leaf"/>
            </div>
        </footer>
    );
};

export default Footer;