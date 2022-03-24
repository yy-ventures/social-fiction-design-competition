import React from 'react';
import "./SbdcHeader.scss";
import socialFictionLogo from "../../../../assets/sbdc_logo.svg"

import { Link } from 'react-router-dom';

const SbdcHeader = () => {
    return (
        <section className="sbdc-header" id="sdbcHeaderId">
            <div className="row">
                <div className="col-lg-6 col-md-7 col-12 sbdc-header-left d-flex align-items-center justify-content-center">
                    <div>
                        <p>The<span className="deep-blue"> Social Business Design Competition</span> is a global platform looking for youth-driven entrepreneurial solutions to combat some of the most pressing challenges in your community or around the world! </p>
                        <p>Design your very own social business model for any of the following focus areas: Environment and Climate Change, Micro-credit, Agriculture, Technology & Innovation, Waste, Circular Economy, Tourism, WASH, Employment, Sports, Health & Well-being, and others. </p>
                        <Link to="/sbdc-registration"><button>apply now</button></Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-5 col-12 sbdc-header-right d-flex align-items-center justify-content-center">
                    <div>
                        <img src={socialFictionLogo} alt="social-fiction-design" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SbdcHeader;