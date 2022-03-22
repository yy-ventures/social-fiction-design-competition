import React from "react";
import "./SfdcSubmitIdea.scss";
import applyPoster from "../../../../assets/apply_poster.png"
import applyPosterMobile from "../../../../assets/apply_poster_mobile.png"

const SfdcSubmitIdea = () => {
    return (
        <section className="sfdc-submit-idea">
            <img src={applyPoster} alt="apply-poster" className="apply-poster"/>
            <img src={applyPosterMobile} alt="apply-poster-mobile" className="apply-poster-mobile"/>
        </section>
    );
};

export default SfdcSubmitIdea;
