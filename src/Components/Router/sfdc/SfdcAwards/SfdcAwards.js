import React from 'react';
import "./SfdcAwards.scss";
import fictionThreeArt from "../../../../assets/fiction_art_3.png";

const SfdcAwards = () => {
    return (
        <section className="sfdc-awards position-relative">
            <img src={fictionThreeArt} alt="fiction-art-three" />
            <div className="py-5 px-1 text-center">
                <h2>winning reward</h2>
            </div>
        </section>
    );
};

export default SfdcAwards;