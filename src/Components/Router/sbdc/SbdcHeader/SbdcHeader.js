import React from "react";
import "./SbdcHeader.scss";
import socialFictionLogo from "../../../../assets/sbdc_logo.svg";
import Principles from "../../../../assets/sbdc/section-bg.png";
import RightArrow from "../../../../assets/sbdc/right-arrow.png";
import { Link } from "react-router-dom";

const SbdcHeader = () => {
  return (
    <section className="sbdc-header" id="sdbcHeaderId">
      <div className="row g-0 min-vh-100">
        <div className="col-lg-6 col-md-5 col-12 sbdc-header-left d-flex align-items-center">
          <div className="content-box">
            <img src={socialFictionLogo} alt="social-fiction-design" />

            <p>
              The Social Business Design Competition invites innovators,
              problem-solvers, and aspiring entrepreneurs from all over the
              world to design impactful solutions that address pressing social
              and environmental challenges.
            </p>

            <p>
              This is a global platform encouraging Social Business to build a
              world we want to live in, a world free of social and environmental
              injustices that plague our communities.
            </p>

           
              <button className="complete-btn" type="button" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeq913c1cLkp3N5A73O85mtYUZ0-1E57sJ0VFbUAYHI0CYNQA/viewform", "_blank")}>
                <span className="btn-text">Complete Now</span>
                <span className="btn-icon">
                  <img src={RightArrow} alt="right-arrow" />
                </span>
              </button>
          
          </div>
        </div>

        <div
          className="col-lg-6 col-md-7 col-12 sbdc-header-right d-flex align-items-center justify-content-center"
          style={{
            background: `url(${Principles}) center center / cover no-repeat`,
          }}
        >
          <h2>SUBMIT YOUR IDEAS</h2>
        </div>
      </div>
    </section>
  );
};

export default SbdcHeader;
