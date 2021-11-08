import React from "react";

import { Link } from "react-router-dom";

import "./InfoBar.scss";

export default function InfoBar() {
    return (
        <div className="infobar">
            <div id="infobar-skyblue-circle"></div>
            <div className="flex-container">
                <h4>
                    Find your entrepreneurial drive and share with us
                    <br />
                    <span id="infobar-blue-text">
                        {" "}
                        your ideas for a safer and better world!
                    </span>
                </h4>
                <div className="button-container">
                    <Link to="/sbdc" className="btn-home button-blue">
                        COMPETE AT SBDC
                    </Link>
                    <Link to="/sfdc" className="btn-home button-blue">
                        COMPETE AT SFDC
                    </Link>
                </div>
            </div>
        </div>
    );
}
