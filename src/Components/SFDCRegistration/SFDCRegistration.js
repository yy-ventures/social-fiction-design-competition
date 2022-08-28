import React, { useState } from "react";
import "./SFDCRegistration.scss";
import socialFictionLogo from "../../assets/sfdc_logo.png";
import SFDCInputs from "./SFDCInputs/SFDCInputs";
import Link from "react-router-dom/Link";
import sfdcUSD from "../../assets/sfdc-usd.png";
import yyLogos from "../../assets/logos.png";
import { useHistory } from "react-router-dom";

const SFDCRegistration = () => {
  let app_id = localStorage.getItem("app_id");
  let username = localStorage.getItem("name");
  let history = useHistory();
  const handleLogout = () => {
    history.push("/");
    localStorage.removeItem("app_id");
    localStorage.removeItem("name");
    localStorage.removeItem("token");
  };

  const [draftPopup, setDraftPopup] = useState(false);

  return (
    <section className="sfdc-registration" id="sfdcRegId">
      <div className="sfdc-registration-header position-relative">
        <div className="row">
          <div className="col-lg-6 sfdc-registration-header-left d-flex align-items-start justify-content-center">
            <div>
              <p>
                The{" "}
                <span className="deepblue">
                  Social Fiction Design Competition
                </span>{" "}
                invites visionaries and dreamers all over the world with a knack
                for creative writing to share how they wish to see the world and
                the lives of young people in the year 2050.
              </p>
              <strong>Think fun, Think innovative.</strong>
              <br />
              <strong>Be Optimistic.</strong>
              <p></p>
              <p>
                Sit back and imagine a world in 2050. <br /> How do you wish to
                see the life of a young person in the year 2050?
              </p>

              <ol>
                <li>
                  In min 1000 - max 5000 words, write a Social Fiction, taking
                  the readers on a tour of what this fictional world in 2050
                  looks like.
                </li>
                <li>
                  Address one or more social and environmental focus areas in
                  your writing: <br />
                  Climate Change, Micro-credit, Agriculture, Technology and
                  Innovation, Transport, Literature, Music, Waste, Circular
                  Economy, Tourism, WASH, Employment, Sports, Health &
                  Well-being etc
                </li>
                <li>
                  Tell us how key players in the government, corporate houses,
                  educational institutions, local businesses and/or community
                  members are contributing to this new world.
                </li>
                <li>
                  Fill up the online application form. Upload and submit your
                  Social Fiction writing!
                </li>
              </ol>
              <p className="mb-0">
                (Before filling up the form, please go through our FAQ section
                in this link: <br />
                <Link to="/sfdc">
                  https://competitions.yunuscentre.org/sfdc
                </Link>
                )
              </p>

              {!username && (
                <div className="mt-5 login-btn">
                  <Link to="/login">Login</Link>
                </div>
              )}
              {username && (
                <div className="mt-5 login-btn">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-6 sfdc-registration-header-right ">
            <div className="image-container1">
              <img src={socialFictionLogo} alt="social-fiction-design" />
            </div>
            <div className="image-container2">
              <img src={sfdcUSD} alt="" />
            </div>
            <div className="image-container3">
              <img src={yyLogos} alt="" />
            </div>
          </div>
        </div>
        <div className="sfdc-registration-header-headline">
          <p>application form</p>
        </div>
      </div>
      <SFDCInputs draftPopup={setDraftPopup} />
    </section>
  );
};

export default SFDCRegistration;
