import React from 'react';
import "./Navigation.scss";
import yunusLogo from "../../../assets/yunus_center.png";
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="navigation-container d-flex align-items-center justify-content-between">
                <div className="navigation-logo">
                    <Link to="/"><img src={yunusLogo} alt="yunus-center" /></Link>
                </div>
                <div className="navigation-menu">
                    <Link to="/about">about</Link>
                    <Link to="/sbdc">sbdc</Link>
                    <Link to="/sfdc">sfdc</Link>
                    <Link to="/partners">partners</Link>
                    <Link to="/contact">contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;