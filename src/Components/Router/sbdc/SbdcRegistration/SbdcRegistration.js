import React from "react";
import "./SbdcRegistration.scss";
import socialFictionLogo from "../../../../assets/sbdc_logo.svg";
import SbdcInputs from "./SbdcInputs/SbdcInputs";

const SbdcRegistration = () => {
    return (
        <section className="sbdc-registration" id="sbdcRegId">
            <div className="sbdc-registration-header position-relative">
                <div className="row">
                    <div className="col-lg-6 sbdc-registration-header-left d-flex align-items-center justify-content-center">
                        <div>
                            <p>
                            The Social Business Design Competition is a global competition looking for youth-driven entrepreneurial solutions to combat some of the most pressing challenges of our time. Design your very own social business idea to solve a social or environmental issue in your community or around the world!
                            </p>
                            <ol>
                                <li>Fill up the Social Business Design Competition online application.</li>
                                <li>Submit your personal information and answer all relevant questions.</li>
                                <li>Upload your Social Business pitch in the PPT, PDF, DOC, MP4 format.
                                    Visit the online application form to learn more about the pitch requirements we are accepting for the file format. If you have trouble submitting, try resizing your file to upload or contact <span className="highlight-left">info@yunuscentre.org</span>, <span className="highlight-left">info@yy.ventures</span>, or <span className="highlight-left">maisha@yy.ventures</span>.</li>
                                <li>Click Submit and wait for the submission confirmation pop-up on top of the page.</li>
                                <li>Receive a confirmation email in your inbox.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="col-lg-6 sbdc-registration-header-right d-flex align-items-center justify-content-center">
                        <div>
                            <img
                                src={socialFictionLogo}
                                alt="social-fiction-design"
                            />
                        </div>
                    </div>
                </div>
                <div className="sbdc-registration-header-headline">
                    <p>application form</p>
                </div>
            </div>
            <SbdcInputs />
        </section>
    );
};

export default SbdcRegistration;
