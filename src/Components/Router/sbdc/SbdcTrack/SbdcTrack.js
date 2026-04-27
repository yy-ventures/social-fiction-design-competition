import "./SbdcTrack.scss";
import Light from "../../../../assets/light.png";
import UpperBg from "../../../../assets/solution-bg.png";
import RightArrow from "../../../../assets/sbdc/right-arrow.png";
import { Link } from "react-router-dom";
import React from "react";
import useScrollAnimation from "../SbdcWhoCanApply/useScrollAnimation";

const SbdcTrack = () => {
  const [ref, active] = useScrollAnimation();
  const [leftRef, leftActive] = useScrollAnimation();
  const [rightRef, rightActive] = useScrollAnimation();
  return (
    <section className="sbdc-track">
      <div
        className="track-banner"
        style={{ backgroundImage: `url(${UpperBg})` }}
      >
        <div className="track-banner__content">
          <p>Want to build</p>
          <h2>a solution for</h2>
          <p>a better world?</p>
          <Link to="/sbdc-registration">
            <button>
              Complete Now <span>→</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="track-body">
        <div
          ref={leftRef}
          className={`track-left animate-left ${leftActive ? "active" : ""}`}
        >
          <h3>
            Help us to
            <br />
            build
            <br />
            the future!
          </h3>
        </div>

        <div
          ref={rightRef}
          className={`track-right animate-right ${rightActive ? "active" : ""}`}
        >
          <img src={Light} alt="lightbulb" />
        </div>
      </div>
    </section>
  );
};

export default SbdcTrack;
