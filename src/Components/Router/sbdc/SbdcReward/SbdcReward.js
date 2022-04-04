import React from 'react';
import "./SbdcReward.scss";
import rewardCoin from "../../../../assets/reward-coin.png"
import listArrow from '../../../../assets/list-arrow.svg'
import rewardCup from '../../../../assets/award_reward.png'

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
                    <div className="sbdc-reward-body">
                        <div className='reward-body-top'>
                            <div>
                                <h3>The best <span className='marked'>Social Business Idea</span></h3>
                                <h3>will be awarded with</h3>
                                <div className='reward-prize'>
                                    <h2>usd 10,000</h2>
                                </div>
                            </div>
                            <div>
                                <h2>New Deadline <span><img src={listArrow} alt='list'/></span></h2>
                                <p>Submit your <span className='marked'>Social Business idea</span> by</p>
                            </div>
                        </div>
                        <div className='reward-body-bottom'>
                            <div className='reward-cup'>
                                <img src={rewardCup} alt='reward'/>
                            </div>
                            <div className='reward-date'>
                                <h2>30 APRIL 2022</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SbdcReward;