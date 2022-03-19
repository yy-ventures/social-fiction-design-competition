import React, { useState } from "react";
import "./SfdcHeader.scss";
import fictionVideo from '../../../../assets/hero_video.mp4'
import putMute from '../../../../assets/mute.png'
import putUnmute from '../../../../assets/unmute.png'

const SfdcHeader = () => {
    const [muted, setMuted] = useState(false)
    const HandleMute = () => {
        setMuted(true)
    }
    const HandleUnMute = () => {
        setMuted(false)
    }
    return (
        <section className="sfdc-header position-relative" id="sfdcHeaderId">
            <video autoPlay muted={muted} loop>
                <source src={fictionVideo} type="video/mp4"/>
            </video>
            {!muted && <div className="box1" onClick={HandleMute}>
                <img src={putMute} alt="" />    
            </div>}
            {muted && <div className="box2" onClick={HandleUnMute}>
                <img src={putUnmute} alt="" />    
            </div>}
        </section>
    );
};

export default SfdcHeader;
