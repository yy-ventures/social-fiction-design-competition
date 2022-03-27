import React from "react";
import "./SbdcSubmitIdea.scss";
import fictionThree from "../../../../assets/fiction_3.png";
import { Link } from "react-router-dom";
const SbdcSubmitIdea = () => {
    return (
        <section className="submit-idea d-flex align-items-center justify-content-center text-center position-relative">
            <img src={fictionThree} alt="fiction-three" />
            <div>
                <h3>Got an entrepreneurial solution to venture?</h3>
                <h2>Apply directly or nominate a friend!</h2>
                <Link to="/sbdc-registration" id="partners-section">
                    <button>submit your idea</button>
                </Link>
            </div>
        </section>
    );
};

export default SbdcSubmitIdea;
