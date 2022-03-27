import React from 'react';
import "./SfdcAwards.scss";
import rewardArt from '../../../../assets/reward_art.png'
import rewardRight from '../../../../assets/award_right.svg'

const SfdcAwards = () => {
    return (
        <section className="sfdc-awards">
            <div>
                <h4>The best</h4>
                <h4 className='marked'>Social Fiction Idea</h4>
                <h4>will be awarded</h4>
                <img src={rewardArt} alt="art"/>
            </div>
            <div className='reward_right'>
                <img src={rewardRight} alt="reward"/>
            </div>
        </section>
    );
};

export default SfdcAwards;