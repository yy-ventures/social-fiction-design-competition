import React from "react";

// components
import SfdcFaq from "./SfdcFaq/SfdcFaq";
// images
import sfdcLogo from "../../../assets/sfdc/logo/logo.png";
import typeWriter from "../../../assets/sfdc/images/typewriter.png";
import imagineImage from "../../../assets/sfdc/images/imagine.png";
import ideaImage from "../../../assets/sfdc/images/idea.png";
import noteImage from "../../../assets/sfdc/images/note.png";
// icons
import rightArrow from "../../../assets/sfdc/icons/right-arrow.png";
import shortArrow from "../../../assets/sfdc/icons/short-arrow.png";
// layouts
import layoutBlue from "../../../assets/sfdc/layout/layout-blue.png";
import layoutOrange from "../../../assets/sfdc/layout/layout-orange.png";
import layoutLightBlue from "../../../assets/sfdc/layout/layout-light-blue.png";

import "./sfdc.scss";

const SfdcRoute = () => {
  return (
    <div className="sfdc-home">
      {/* HERO SECTION START */}
      <div className="hero-section">
        <div className="layout-1"></div>
        <div className="hero-section__content">
          <div className="img-container">
            <img className="sfdc-logo" src={sfdcLogo} alt="sfdc logo" />
          </div>
          <div className="content">
            <p className="text">
              The Social Fiction Design Competition invites visionaries and
              dreamers all over the world with a knack for creative writing to
              share how they wish to see the world and the lives of young people
              in the year 2050.
            </p>
            <p className="text">
              This is a global platform encouraging Social Fiction to imagine a
              world we want to live in, a world free of social and environmental
              injustices that plague our communities. And it all starts with our
              imagination.
            </p>
          </div>
          <button className="hero-btn">
            Complete Now{" "}
            <img className="arrow-icon" src={rightArrow} alt="right arrow" />
          </button>
        </div>
        <div className="hero-section__typewriter">
          <div className="typewriter-container">
            <img className="layout-top" src={layoutBlue} alt="layout" />
            <div className="img-container">
              <img
                className="typesriter-img"
                src={typeWriter}
                alt="typewriter"
              />
            </div>
            <img className="layout-bottom" src={layoutOrange} alt="layout" />
          </div>
        </div>
      </div>
      {/* HERO SECTION END */}

      {/* IDEA SECTION START */}
      <div className="idea-section">
        <div className="layout-2"></div>
        <div className="image-container">
          <img className="layout-top" src={layoutOrange} alt="layout" />
          <div className="img-container">
            <img src={imagineImage} alt="note" />
          </div>
          <img className="layout-bottom" src={layoutBlue} alt="layout" />
        </div>
        <div className="content-container">
          <div className="prize-pool">
            <p className="text">
              {" "}
              <span>Compete and get</span> <span>a chance to win</span>
            </p>
            <span className="price">USD 10,000</span>
          </div>
          <div className="text-container">
            <h1 className="heading">
              <span>Sit back and</span>
              <span>imagine</span>
              <span>a world in 2050</span>
            </h1>
            <p>
              <span>How do you wish to see the life of a</span>
              <span> young person in the year 2050?</span>
            </p>
          </div>
          <div className="img-container">
            <img src={ideaImage} alt="idea" />
          </div>
        </div>
      </div>
      {/* IDEA SECTION END */}

      {/* THINK SECTION START */}
      <div className="think-section">
        <div className="heading-container">
          <h1 className="heading">
            <span>Think fun,</span>
            <span>Think innovative.</span>
            <span>Be optimistic.</span>
          </h1>
          <div className="img-container">
            <img src={noteImage} alt="note" />
          </div>
        </div>
        <div className="text-container">
          <p>
            <img src={shortArrow} alt="arrow icon" />
            In min 1000 - max 5000 words, write a Social Fiction, taking the
            readers on a tour of what this fictional world in 2050 looks like.
          </p>
          <p>
            <img src={shortArrow} alt="arrow icon" />
            Address one or more social and environmental focus areas in your
            writing:
          </p>
          <p>
            Climate Change, Micro-credit, Agriculture, Technology and
            Innovation, Transport, Literature, Music, Waste, Circular Economy,
            Tourism, WASH, Employment, Sports, Health & Well-being etc.
          </p>
          <p>
            <img src={shortArrow} alt="arrow icon" />
            Tell us how key players in the government, corporate houses,
            educational institutions, local businesses and/or community members
            are contributing to this new world.
          </p>
          <p>
            <img src={shortArrow} alt="arrow icon" />
            Fill up the online application form and submit your Social Fiction
            writing!
          </p>
        </div>
      </div>
      {/* THINK SECTION END */}
      <SfdcFaq />
    </div>
  );
};
export default SfdcRoute;
