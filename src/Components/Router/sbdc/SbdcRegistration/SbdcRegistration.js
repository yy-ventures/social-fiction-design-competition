import React from "react";
import "./SbdcRegistration.scss";
import socialFictionLogo from "../../../../assets/sbdc_logo.svg";
import SbdcInputs from "./SbdcInputs/SbdcInputs";
import listArrow from '../../../../assets/list-arrow.svg'
import Link from "react-router-dom/Link";

const SbdcRegistration = () => {
    return (
        <section className="sbdc-registration" id="sbdcRegId">
            <div className="sbdc-registration-header position-relative">
                <div className="row">
                    <div className="col-lg-6 sbdc-registration-header-left d-flex align-items-center justify-content-center">
                        <div>
                            <p>
                                The{" "}
                                <span className="deepblue">
                                  Social Business Design Competition
                                </span>{" "}
                                invites innovators, problem-solvers, and aspiring entrepreneurs from all over the world to design impactful solutions that address pressing social and environmental challenges.
                            </p>
                            <strong>Think bold, Think impactful.</strong>
                            <br />
                            <strong>Think sustainable.</strong>
                            <br /><br />
                            <p>Look around you and identify a challenge that matters. How would you design a business that solves a real problem and improves people’s lives?</p>
                            <i>
                                <ol>
                                    <li>
                                        Create a Social Business that addresses a real-world problem and contributes to building a better future.
                                    </li>

                                    <li>
                                        You can submit your Social Business idea by submitting:
                                    </li>

                                    <li>
                                        A presentation slide deck outlining:
                                        <ul>
                                            <li>What the business is about</li>
                                            <li>The problem it is solving</li>
                                            <li>The proposed solution</li>
                                            <li>Revenue model</li>
                                            <li>Financial sustainability approach</li>
                                            <li>Expected social impact</li>
                                        </ul>
                                    </li>

                                    <li>
                                        Address one or more of the goals of building a World of Three Zeros: Zero Net Carbon Emissions, Zero Wealth Concentration to End Poverty, Zero Unemployment by Unleashing Entrepreneurship for All
                                    </li>

                                    <li>
                                        Fill up the online application form and submit your Social Business idea!
                                    </li>
                                </ol>
                            </i>
                            <p className="mb-0">
                                (Before filling up the form, please go through our FAQ section)
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 sbdc-registration-header-right">
                        <div>
                            <img
                                src={socialFictionLogo}
                                alt="social-fiction-design"
                            />
                        </div>
                        <div className="sbdc-registration-footer">
                            <img src={listArrow} alt="list"/>
                            <div className="registration-footer-content">
                                <h2><span className="marked">win</span> usd 10,000</h2>
                            </div>
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
