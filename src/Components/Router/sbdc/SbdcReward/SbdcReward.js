import React from "react";
import "./SbdcReward.scss";

// import RewardBackground from "../../../../assets/award/award-left-bg.png";
import Reward from "../../../../assets/award/award-left.png";

const SbdcReward = () => {
  return (
    <section className="sbdc-reward">
      <div className="reward-wrapper">
        <div className="reward-left">
          <div className="beige-shape"></div>
          <div className="image-wrapper">
            <img src={Reward} alt="reward" />
          </div>
        </div>
        <div className="reward-right">
          <div className="pill">Compete and get  a chance to win</div>

          <div className="badge">
            <span>USD</span>
            <h2>10,000</h2>
            <small>to implement your idea!</small>
          </div>

          <h1>Look around you and identify a challenge that matters.</h1>

          <p>
            How would you design a business that solves a real problem and
            improves people's lives?
          </p>
        </div>
      </div>
    </section>
  );
};

export default SbdcReward;
