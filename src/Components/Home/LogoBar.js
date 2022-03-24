import React from "react";
import "./LogoBar.scss";

import yc_img from "../../assets/images/logos/yc.png";
import yyv_img from "../../assets/images/logos/yyv.png";
import yyf_img from "../../assets/images/logos/yyFoundation.png";
import Cuz_img from "../../assets/images/logos/CathUni.png";

export default function LogoBar() {
    return (
        <div className="logobar d-flex justify-content-center align-items-center">
            <div id="partners-section">
                <h4>Brought to you by</h4>
                <div className="grid-container">
                    <img src={yc_img} alt="yunus Center" />
                    <img src={yyv_img} alt="yunus and you, yy ventures" />
                    <img src={yyf_img} alt="yunus and you foundation, yy" />
                    <img src={Cuz_img} alt="Catholic University of Zimbabwe" />
                </div>
            </div>
        </div>
    );
}
