import React from 'react';
import "./SfdcWhoCanApply.scss";
import sfdcBanner from "../../../../assets/sfdc_banner.png";

const SfdcWhoCanApply = () => {
    return (
        <div className="sfdc-who-can-apply">
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <div className="sfdc-who-can-apply-body">
                        <div>
                            <img src={sfdcBanner} alt="sfdc-banner" />
                        </div>
                        <div className="sfdc-who-can-apply-list">
                            <ul>
                                <li>
                                    <h6>You have an idea to solve any of the following issues:</h6>
                                    <p>Environment and Climate Change, Micro-credit, Agriculture, Technology and Innovation, Waste, Circular Economy, Tourism, WASH, Employment, Sports, Health and well-being, and others.</p>
                                </li>
                                <li><h6>You are between ages 12 to 35.</h6></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
            <div className="text-center">
                <h2>Submit your idea <br/> using any creative category!</h2>
            </div>
        </div>
    );
};

export default SfdcWhoCanApply;