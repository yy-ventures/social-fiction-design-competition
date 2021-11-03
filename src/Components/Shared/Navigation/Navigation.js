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
                    <Link to="/about">about</Link>
                    <Link to="/sbdc">sbdc</Link>
                    <Link to="/sfdc">sfdc</Link>
                    <a href="#partners-section">partners</a>
                    <Link to="/contact">contact</Link>
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
