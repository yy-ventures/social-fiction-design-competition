import { React, useState } from "react";
import "./Navigation.scss";
import yunusLogo from "../../../assets/yunus_center.png";
import { Link } from "react-router-dom";

import HamburgerMenu from "react-hamburger-menu";

const Navigation = () => {
    const [Hamburger, setHamburger] = useState(false);

    const handleClick = () => {
        setHamburger((prev) => !prev);
    };

    return (
        <nav className="navigation">
            <div className="navigation-container d-flex align-items-center justify-content-between">
                <div className="navigation-logo">
                    <Link to="/">
                        <img src={yunusLogo} alt="yunus-center" />
                    </Link>
                </div>
                <div className="navigation-menu">
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div className="sbdc-dropdown">
                        <a href="#sbdcRoute" className="sbdc-dropbtn">sbdc <i class="fas fa-chevron-down"></i></a>
                        <div class="sbdc-dropdown-content">
                            <Link to="/sbdc">Explore</Link>
                            <Link to="/sbdc-registration">Apply</Link>
                        </div>
                    </div>
                    <div className="sbdc-dropdown">
                        <a href="#sfdcRoute">sfdc <i class="fas fa-chevron-down"></i></a>
                        <div class="sbdc-dropdown-content">
                            <Link to="/sfdc">Explore</Link>
                            <Link to="/sfdc-registration">Apply</Link>
                        </div>
                    </div>
                    <div>
                        <a href="#partners-section">partners</a>
                    </div>
                    <div>
                        <a href="#contactRoute">contact</a>
                    </div>
                </div>
                <div
                    className={
                        !Hamburger
                            ? "mobile-navigation-menu"
                            : "mobile-navigation-menu appear"
                    }
                >
                    <Link to="/about" onClick={handleClick}>
                        about
                    </Link>
                    <Link to="/sbdc" onClick={handleClick}>
                        sbdc
                    </Link>
                    <Link to="/sfdc" onClick={handleClick}>
                        sfdc
                    </Link>
                    <a href="#partners-section" onClick={handleClick}>partners</a>
                    <Link to="/contact" onClick={handleClick}>
                        contact
                    </Link>
                </div>
                <div className="navigation-hamburger-menu">
                    <HamburgerMenu
                        isOpen={Hamburger}
                        menuClicked={handleClick}
                        width={25}
                        height={15}
                        strokeWidth={2}
                        rotate={0}
                        color="white"
                        borderRadius={10}
                        animationDuration={0.5}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
