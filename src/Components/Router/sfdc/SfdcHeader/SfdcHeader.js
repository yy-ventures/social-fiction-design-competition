import React from "react";
import "./SfdcHeader.scss";
import fictionVideo from '../../../../assets/hero_video.mp4'

const SfdcHeader = () => {
    console.log(fictionVideo)

    return (
        <section className="sfdc-header position-relative" id="sfdcHeaderId">
            <video autoPlay muted loop>
                <source src={fictionVideo} type="video/mp4"/>
            </video>
        </section>
    );
};

export default SfdcHeader;
