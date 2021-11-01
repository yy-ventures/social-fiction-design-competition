import React from 'react';
import "./SbdcHeader.scss";
import socialFictionLogo from "../../../../assets/sbdc_logo.svg"

const SbdcHeader = () => {
    return (
        <section className="sbdc-header">
            <div className="row">
                <div className="col-lg-6 col-md-7 col-12 sbdc-header-left d-flex align-items-center justify-content-center">
                    <div>
                        <p><span className="deep-blue">The Social Business Design Competition</span> is a global platform promoting youth-driven entrepreneurial solutions to combat social challenges like water, circularity, sports, poverty, employment, etc. Our competition is looking for youth from the global arena to bring unique, equitable ideas that are aligned with Sustainable Development Goals and moulding real solutions by designing their very own Social Business model. </p>
                        <button>apply now</button>
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