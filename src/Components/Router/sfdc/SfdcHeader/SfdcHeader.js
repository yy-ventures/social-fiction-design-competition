import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./SfdcHeader.scss";

const SfdcHeader = () => {
    const [playing, setPlaying] = useState(true)
    useEffect(()=> {
        setPlaying(true)
        return () => setPlaying(false)
    }, [])
    return (
        <section className="sfdc-header position-relative" id="sfdcHeaderId">
            <ReactPlayer 
                url="https://www.youtube.com/watch?v=L4kU97gXWj0?rel=0&autoplay=1&controls=0&showinfo=0"
                width="100%" 
                height="100%" 
                controls={true} 
                loop
                autoPlay
                playing={playing}
                playsInline
                allowfullscreen
                fileConfig={{ attributes: { autoPlay: true }}}
                config={{
                    file: {
                      attributes: {
                        preload: "auto",
                      },
                    },
                  }}
            />
        </section>
    );
};

export default SfdcHeader;
