import "./SbdcTrack.scss";
import Light from "../../../../assets/light.png";
import UpperBg from "../../../../assets/solution-bg.png";

import { Link } from "react-router-dom";
import React from "react";
import useScrollAnimation from "../SbdcWhoCanApply/useScrollAnimation";

const SbdcTrack = () => {

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
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeq913c1cLkp3N5A73O85mtYUZ0-1E57sJ0VFbUAYHI0CYNQA/viewform#sbdcRegId"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              Complete Now <span>→</span>
            </button>
          </a>
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
