import { useState, useEffect } from "react";
import "./Navigation.scss";
import yunusLogo from "../../../assets/yyventurelogo.png";
import { Link } from "react-router-dom";

import HamburgerMenu from "react-hamburger-menu";

const Navigation = () => {
  const [Hamburger, setHamburger] = useState(false);
  const [show, setShow] = useState(false);
  let [oldY] = useState(0);
  const controlNavbar = (e) => {
    const scrollPosition = Number.parseInt(e.target.scrollTop);
    if (scrollPosition < 300) {
      setShow(false);
      return;
    }
    if (scrollPosition <= oldY) {
      setShow(false);
      oldY = scrollPosition;
    } else if (scrollPosition > oldY) {
      setShow(true);
      oldY = scrollPosition;
    } else {
      return false;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar, true);
    return () => {
      window.removeEventListener("scroll", controlNavbar, true);
    };
  }, []);

  const handleClick = () => {
    setHamburger((prev) => !prev);
  };

  return (
    <nav className={`navigation ${show && "navigation-move-above"}`}>
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
            <a href="#sbdcRoute" className="sbdc-dropbtn">
              sbdc <i className="fas fa-chevron-down"></i>
            </a>
            <div className="sbdc-dropdown-content">
              <Link to="/sbdc">Explore</Link>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeq913c1cLkp3N5A73O85mtYUZ0-1E57sJ0VFbUAYHI0CYNQA/viewform" target="_blank" rel="noopener noreferrer">
                Apply
              </a>
            </div>
          </div>
          <div className="sbdc-dropdown">
            <a href="#sfdcRoute">
              sfdc <i className="fas fa-chevron-down"></i>
            </a>
            <div className="sbdc-dropdown-content">
              <Link to="/sfdc">Explore</Link>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScFo_mXAxunpkZ9yHDk5aDHeHI4mtMd9OLkKBb1A4XTmx74ZQ/viewform" target="_blank" rel="noopener noreferrer">
                Apply
              </a>
            </div>
          </div>
          <div>
            <Link to="/#partners-section">Partners</Link>
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
          <a href="#partners-section" onClick={handleClick}>
            partners
          </a>
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
