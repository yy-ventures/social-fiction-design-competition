import React from 'react';
import "./SfdcAwards.scss";
import sfdcCoin from "../../../../assets/sfdc-coin.png"
import sfdcArt from "../../../../assets/fiction_art_2.png"

const SfdcAwards = () => {
    return (
        <section className="sfdc-awards position-relative">
            <div className="sfdc-coin">
                <img src={sfdcCoin} alt="sfdc-coin" />
            </div>
            <div className="text-center">
                <div>
                    <h2>winning reward</h2>
                </div>
                <div className="mt-4">
                    <h4>The best Social Fiction Idea will be awarded with</h4>
                    <h3>USD 10,000 prize money</h3>
                </div>
                <div className="mt-4">
                    <h5>Certificate of Recognition</h5>
                    <h6>for top participants.</h6>    
                </div>
            </div>
            <div className="sfdc-art">
                <img src={sfdcArt} alt="sfdc-art"/>
            </div>
        </section>
    );
};

export default SfdcAwards;