import React from 'react';
import "./SbdcTimeline.scss";
import sbdcTimelineLogo from "../../../../assets/sbdc_timeline.svg";
import sbdcTimelineLogoMobile from "../../../../assets/sbdc_timeline_mobile.svg";

const SbdcTimeline = () => {
    return (
        <section className="sbdc-timeline">
            <div className="sbdc-timeline-header">
                <h2>competition timeline</h2>
            </div>
            <img src={sbdcTimelineLogo} alt="sbdc-timeline" className="sbdc-timeline-logo"/>
            <img src={sbdcTimelineLogoMobile} alt="sbdc-timeline" className="sbdc-timeline-logo-mobile"/>
        </section>
    );
};

export default SbdcTimeline;