import React from 'react';
import "./SbdcReward.scss";

const SbdcReward = () => {
    return (
        <section className="sbdc-reward">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12 px-0">
                    <div className="sbdc-reward-header d-flex align-items-center justify-content-center">
                        <div>
                            <h2 className="winning-head">winning</h2>
                            <h2 className="reward-head">reward</h2>
                            <hr></hr>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-6 col-12 px-0">
                    <div className="sbdc-reward-body"></div>
                </div>
            </div>
        </section>
    );
};

export default SbdcReward;