import React from 'react';
import "./SfdcAwards.scss";
import rewardArt from '../../../../assets/reward_art.png'
import rewardRight from '../../../../assets/award_right.svg'
import prizeDeadline from '../../../../assets/prize_deadline.png'

const SfdcAwards = () => {
    return (
        <section className="sfdc-awards">
            <div className='reward_left'>
                <div>
                    <img src={rewardRight} alt="reward"/>
                </div>
                <div className='sfdc-awards-footer'>
                    <div className='sfdc-awards-footer-content'>
                        <h4>The best</h4>
                        <h4 className='marked'>Social Fiction Idea</h4>
                        <h4>will be awarded</h4>
                    </div>
                    <img src={rewardArt} alt="art" />
                </div>
            </div>
            <div className='reward_right'>
                <img src={prizeDeadline} alt="prize-deadline"/>
            </div>
        </section>
    );
};

export default SfdcAwards;