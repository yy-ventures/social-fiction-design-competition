import React from "react";
import "./SfdcWhoCanApply.scss";
import sfdcLogo from '../../../../assets/sfdc_new_logo.svg'
import sfdcPath from '../../../../assets/apply_path.png'
import applyPathBg from '../../../../assets/apply_bg_path.png'
import mozaik from '../../../../assets/apply_right_mozaik.png'
import curveArrow from '../../../../assets/curve_arrow.svg'

import { Link } from "react-router-dom";

const SfdcWhoCanApply = () => {
    return (
        <div className="sfdc-who-can-apply">
            <div className="absolute-sub-heading">
                <img src={applyPathBg} alt="apply-path"/>
                <h3>create <span className="bold">social fiction</span></h3>
            </div>
            <div className="who-can-apply-content">
                <div className="down_arrow">
                    <img src={curveArrow} alt="curve"/>
                </div>
                <div className="who-can-apply-content-left">
                    <div className="absolute-image">
                        <img src={sfdcPath} alt="sfdc_path"/>
                    </div>
                    <div className="who-can-apply-text">
                        <h4>LIFE OF A</h4>
                        <h4>YOUNG PERSON</h4>
                        <h2>IN THE WORLD</h2>
                        <h1><span className="of">OF</span>2050</h1>
                    </div>
                    <div className="who-can-apply-text-bottom">
                        <p>The <span className="marked">Social Fiction Design Competition</span> is a global competition looking for young creatives to design a fictional world for young people in 2050. What kind of world do you want to see for the next generation?</p>
                        <div className="who-can-apply-text-bottom-headline">
                            <h4>If you imagine it,</h4>
                            <h4>you can make it happen.</h4>
                        </div>
                    </div>
                </div>
                <div className="who-can-apply-content-right">
                    <img src={mozaik} alt="apply" className="absolute_right"/>
                    <img src={sfdcLogo} alt="sfdc-logo" className="sfdc_logo"/>
                    <Link to="/sfdc-registration">apply now</Link>
                </div>
            </div>
        </div>
    );
};

export default SfdcWhoCanApply;
