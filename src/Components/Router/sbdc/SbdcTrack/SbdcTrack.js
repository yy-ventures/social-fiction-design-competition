import React from 'react';
import "./SbdcTrack.scss";

const SbdcTrack = () => {
    return (
        <section className="sbdc-track">
            <div className="track-header p-4 text-center">
                <div>
                    <h3>the competition track:</h3>
                    <h2>Idea to Impact</h2>
                </div>
            </div>
            <div className="track-body mt-4">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-12 track-card track-arrow track-card-one">
                        <h4>Submit your idea</h4>
                        <div className="mt-4">
                            <p>Register your entry in our website, either individually or for your team. Fill up your personal details and submit your social business idea.</p>
                            <p className="bold">Get creative. Tell us your Social Business name, the problem statement, your big idea, and how you plan to do business!</p>
                            <p>Instructions are elaborated in the Application form.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12 track-card track-card-two">
                        <h4>Social business building</h4>
                        <div className="mt-4">
                            <p>Shortlisted participants will undergo informative and intensive workshops on Social Business Planning that shape their creativity & innovation, social business model, and storytelling.</p>
                            <p className="bold">The participants undergo 45 days to apply these learnings to build a viable and sustainable market-driven social business model. Participants will submit their social business plan by the submission deadline. </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12 track-card track-card-three">
                        <h4>Pitch</h4>
                        <div className="mt-4">
                            <p className="bold">Top 20 Shortlisted participants from around the globe will come together in our virtual pitch event.</p>
                            <p>They will share a 3-minute pitch about their story, social business idea, and business model to a panel of prestigious judges of entrepreneurs, investors, industry specialists etc., who will decide the competition winners. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SbdcTrack;