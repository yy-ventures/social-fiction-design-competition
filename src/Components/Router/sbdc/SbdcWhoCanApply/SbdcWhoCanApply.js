import React from 'react';
import "./SbdcWhoCanApply.scss";
import fictionOne from "../../../../assets/fiction_1.png";
import fictionTwo from "../../../../assets/fiction_2.png"
import WhoCanApplyDetails from './WhoCanApplyDetails/WhoCanApplyDetails';

const SbdcWhoCanApply = () => {
    return (
        <section className="who-can-apply">
            <img src={fictionOne} alt="fiction-one" className="fictionOne"/>
            <img src={fictionTwo} alt="fiction-two" className="fictionTwo"/>
            <div className="who-can-apply-header p-4">
                <h2>Let us help you shape your</h2>
                <h3>entrepreneurship journey:</h3>
            </div>
            <div className="who-can-apply-body">
                <div className="who-can-apply-body-container">
                    <ul>
                        <li>Online workshops on Social Business Planning</li>
                        <li>3-month Incubation Support to top 10 participants with 3 intensive boot camps on Social Innovation, Social Business Building, and Pitching. </li>
                    </ul>
                </div>
            </div>
            <div className="who-can-apply-footer pb-5">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <WhoCanApplyDetails/>
                        <div className="who-can-apply-list">
                            <ul>
                                <li>You are an individual or a team of 5 with a creative but viable social business idea to solve any of the following issues:</li>
                                <li>Environment and Climate Change, Micro-credit, Agriculture, Technology and Innovation, Waste, Circular Economy, Tourism, WASH, Employment, Sports, Health and well-being.</li>
                                <li>You and your team members are between ages 12 to 35.</li>
                                <li>You and your team members are students, alums, academics or researchers with an entrepreneurial solution in the form of an idea, a work-in-progress prototype or an early-stage startup.</li>
                                <li>Any social business enthusiasts.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </section>
    );
};

export default SbdcWhoCanApply;