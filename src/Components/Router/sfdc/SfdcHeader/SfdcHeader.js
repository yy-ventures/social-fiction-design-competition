import React from "react";
import "./SfdcHeader.scss";
import sfdcLogo from "../../../../assets/sfdc_logo.png";
import fictionArtOne from "../../../../assets/fiction_art_1.png";
import fictionArtTwo from "../../../../assets/fiction_art_2.png";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

const SfdcHeader = () => {
    return (
        <section className="sfdc-header position-relative" id="sfdcHeaderId">
            <img
                src={fictionArtOne}
                alt="fiction-art-one"
                className="fiction-art-one"
            />
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 text-center">
                    <div className="sfdc-header-logo text-center">
                        <img src={sfdcLogo} alt="sfdc" />
                    </div>
                    <div className="sfdc-header-body mb-5">
                        <div className="mt-5">
                            <h3>
                                Imagine a world in 2050.
                            </h3>
                        </div>
                        <div className="mt-3">
                            <p>
                                The{" "}
                                <span className="deep-blue">
                                    Social Fiction Design Competition
                                </span>{" "}
                                 is an exciting global competition looking for
                                students and young people to re-imagine and
                                create for themselves a world without social
                                problems. We challenge you to imagine a world in 2050. What kind of world do you want to live in? If you imagine it, you can make it happen. Take real social challenges and share your
                                fictional solutions. Get creative and express
                                yourself by writing, illustration, rhetoric,
                                cinematography, animation, or poster
                                presentation.
                            </p>
                        </div>
                        <div>
                            <Link to="/sfdc-registration">
                                <button>apply now</button>
                            </Link>
                        </div>
                        <div>
                            {/* <h2>
                                We shape your entrepreneurship journey! Learn how social problems and fiction align from our online webinar.
                            </h2> */}
                            <YouTube
                                videoId="L4kU97gXWj0"
                                className="mt-5 video-container"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
            <img
                src={fictionArtTwo}
                alt="fiction-art-two"
                className="fiction-art-two"
            />
        </section>
    );
};

export default SfdcHeader;
