import React from 'react';
import "./SfdcSubmitIdea.scss";
import fictionLeafOne from "../../../../assets/fiction_leaf_1.svg";
import fictionLeafTwo from "../../../../assets/fiction_leaf_2.svg";

const SfdcSubmitIdea = () => {
    return (
        <section className="sfdc-submit-idea d-flex align-items-center justify-content-center position-relative">
            <img src={fictionLeafOne} alt="fiction-leaf" className="fiction-leaf-one"/>
            <img src={fictionLeafTwo} alt="fiction-leaf" className="fiction-leaf-two"/>
            <div className="text-center sfdc-submit-idea-content">
                <h2>Got any innovative solution?</h2>
                <h3>Join our competition!</h3>
                <button>submit your idea</button>
            </div>
        </section>
    );
};

export default SfdcSubmitIdea;