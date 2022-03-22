import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import "./SfdcHeader.scss";
import fictionVideo from '../../../../assets/hero_video.mp4'
import putMute from '../../../../assets/mute.png'
import putUnmute from '../../../../assets/unmute.png'
import putPlay from '../../../../assets/play.png'
import putPause from '../../../../assets/pause.png'

const SfdcHeader = () => {
    // const [muted, setMuted] = useState(false)
    // const [play, setPlay] = useState(false)
    
    // const video = document.querySelector('#newVideo')

    // const HandleMute = () => {
    //     setMuted(true)
    // }
    // const HandleUnMute = () => {
    //     setMuted(false)
    // }

    // const HandlePlay = () => {
    //     setPlay(true)
    //     video.play()
    // }
    // const HandlePause = () => {
    //     setPlay(false)
    //     video.pause()
    // }
    return (
        <section className="sfdc-header position-relative" id="sfdcHeaderId">
            {/* <video autoPlay muted={muted} loop id="newVideo">
                <source src={fictionVideo} type="video/mp4"/>
            </video> */}
            <ReactPlayer 
                url={fictionVideo} 
                width="100%" 
                height="100%" 
                controls={true} 
                loop
                autoPlay
                playing
                config={{
                    file: {
                      attributes: {preload: "auto"},
                    },
                }}
            />
            {/* {!muted && <div className="box1" onClick={HandleMute}>
                <img src={putMute} alt="" />    
            </div>}
            {muted && <div className="box2" onClick={HandleUnMute}>
                <img src={putUnmute} alt="" />    
            </div>}
            {play && <div className="box3" onClick={HandlePlay}>
                <img src={putPlay} alt="" />    
            </div>}
            {!play && <div className="box4" onClick={HandlePause}>
                <img src={putPause} alt="" />    
            </div>} */}
        </section>
    );
};

export default SfdcHeader;
