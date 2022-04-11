import React from 'react';
import "./SFDCRegistration.scss";
import socialFictionLogo from "../../assets/sfdc_logo.png";
import SFDCInputs from './SFDCInputs/SFDCInputs';
import Link from 'react-router-dom/Link'
import sfdcUSD from '../../assets/sfdc-usd.png'

const SFDCRegistration = () => {
    return (
        <section className="sfdc-registration" id="sfdcRegId">
            <div className="sfdc-registration-header position-relative">
                <div className="row">
                    <div className="col-lg-6 sfdc-registration-header-left d-flex align-items-center justify-content-center">
                        <div>
                            {/* <p>The <span className="deepblue">Social Business Design Competition</span> promotes youth-driven entrepreneurial solutions to combat social challenges like water, circularity, sports, poverty, employment, etc. The competition welcomes youth from the global arena to bring unique, equitable ideas that are aligned with development goals by putting into play these ideas to achieve real solutions through the designing of their very own Social Business.</p> */}
                            <p>
                            The <span className="deepblue">Social Fiction Design Competition</span> is a global competition for young creatives to imagine the life of a young person in the world of 2050. 
                            </p>
                            <p>
                            Design a fictional world in the future with progress made in the society and environment to create a safer, just and inclusive world for young people in the year 2050.
                            </p>
                            <p className='mb-0'>Before filling up the form, please go through our FAQ section in this link:</p>
                            <Link to='/sfdc'>https://competitions.yunuscentre.org/sfdc</Link>
                            <p className='mt-3'>Fill up the Social Fiction Design Competition online application.</p>
                            <ol>
                                <li>Submit your personal information and answer all relevant questions.</li>
                                <li>Pick a submission category (Writing, Rhetoric, Illustration, Animation, Cinematography and Poster Presentation and upload your file. Visit the online application form to learn more about the file formats we are accepting for each category. If you have trouble submitting, resize your file max 2 MB to upload, or contact <span className="highlight-left">info@yunuscentre.org</span>, <span className="highlight-left">info@yy.ventures</span>, or <span className="highlight-left">maisha@yy.ventures</span>.</li>
                                <li>Click Submit and wait for the submission confirmation pop-up on top of the page.</li>
                                <li>Receive a confirmation email in your inbox.</li>
                            </ol>
                            <div className='mt-5 login-btn'>
                                <Link to='/login'>Login</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 sfdc-registration-header-right ">
                        <div>
                            <img src={socialFictionLogo} alt="social-fiction-design" />
                        </div>
                        <div>
                            <img src={sfdcUSD} alt=''/>
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