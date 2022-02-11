import React from 'react';
import "./SbdcReward.scss";
import rewardCoin from "../../../../assets/reward-coin.png"
import fictionArtThree from "../../../../assets/fiction_el_3.png"
const SbdcReward = () => {
    return (
        <section className="sbdc-reward">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12 px-0">
                    <div className="sbdc-reward-header d-flex align-items-center justify-content-center">
                        <div className="reward-coin">
                            <img src={rewardCoin} alt="reward-coin"/>
                        </div>
                        <div>
                            <h2 className="winning-head">winning</h2>
                            <h2 className="reward-head">reward</h2>
                            <hr></hr>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-6 col-12 px-0">
                    <div className="sbdc-reward-body d-flex align-items-center justify-content-start">
                        <div className="reward-art">
                            <img src={fictionArtThree} alt="fiction-el"/>
                        </div>
                        <div className="reward-list">
                            <ul>
                                <li>The best Social Business Idea <br/> will be awarded with <br/> <span className="usd">USD 10,000 prize money.</span></li>
                                <li><span className="usd">Certificate of Recognition</span> <br/> for top participants.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SbdcReward;