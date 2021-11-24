import React from 'react';
import "./SfdcTimeline.scss"
import sfdcTimelineLogo from "../../../../assets/sfdc_timeline.svg";
import sfdcTimelineLogoMobile from "../../../../assets/sfdc_timeline_mobile.svg";

const SfdcTimeline = () => {
    return (
        <section className="sfdc-timeline">
            <div className="py-5 px-1 text-center sfdc-timeline-content">
                <h2>Competition timeline</h2>
                <img src={sfdcTimelineLogo} alt="sfdc-timeline" className="sfdc-timeline-logo"/>
                <img src={sfdcTimelineLogoMobile} alt="sfdc-timeline-mobile" className="sfdc-timeline-logo-mobile" />
            </div>
        </section>
    );
};

export default SfdcTimeline;