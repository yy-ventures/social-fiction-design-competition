import React from 'react';
import "./SFDCRegistration.scss";
import socialFictionLogo from "../../assets/sfdc_logo.png";
import SFDCInputs from './SFDCInputs/SFDCInputs';

const SFDCRegistration = () => {
    return (
        <section className="sfdc-registration" id="sfdcRegId">
            <div className="sfdc-registration-header position-relative">
                <div className="row">
                    <div className="col-lg-6 sfdc-registration-header-left d-flex align-items-center justify-content-center">
                        <div>
                            {/* <p>The <span className="deepblue">Social Business Design Competition</span> promotes youth-driven entrepreneurial solutions to combat social challenges like water, circularity, sports, poverty, employment, etc. The competition welcomes youth from the global arena to bring unique, equitable ideas that are aligned with development goals by putting into play these ideas to achieve real solutions through the designing of their very own Social Business.</p> */}
                            <p>
                            The <span className="deepblue">Social Fiction Design Competition</span> is welcoming talented young minds to address real social challenges by reimagining a new world through social innovation and creativity. This competition is a platform for the youth to envision a world that “could be” if social problems were fixed, producing new fictional ways to solve them.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 sfdc-registration-header-right d-flex align-items-center justify-content-center">
                        <div>
                            <img src={socialFictionLogo} alt="social-fiction-design" />
                        </div>
                    </div>
                </div>
                <div className="sfdc-registration-header-headline">
                    <p>application form</p>
                </div>
            </div>
            <SFDCInputs/>
        </section>
    );
};

export default SFDCRegistration;