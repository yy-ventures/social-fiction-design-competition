import React from "react";

import "./Home.scss";

import headerimage from "../../assets/images/header2x.jpg";
import sbdclogo from "../../assets/images/logos/sbdc2x.jpg";
import sfdclogo from "../../assets/images/logos/sfdc2x.jpg";

import randomlightbluedecoleft from "../../assets/images/fiction_el_2.png";
import randomlightbluedecoright from "../../assets/images/fiction_el_1.png";
// import blueleaf from "";

export default function Home() {
    return (
        <section className="home-main-section">
            <section className="home-header">
                <div className="home-header-text">
                    <h2>Introducing</h2>
                    <h1>
                        Competi<span>t</span>ions
                    </h1>
                </div>
                <p className="home-header-description">
                    Yunus Centre, in collaboration with YY Ventures, Yunus and
                    You- The YY Foundation and Catholic University of Zimbabwe,
                    is launching the
                    <a href="#">Social Business Design Competition</a> and
                    <a href="#">Social Fiction Design Competition</a> to nurture
                    social innovation and entrepreneurship among next generation
                    of young talent. Our mission is to create a world of three
                    zeros - zero net carbon emission, zero wealth concentration
                    for ending poverty, and zero unemployment by unleashing
                    entrepreneurship in all.
                </p>
                <p className="home-header-description">
                    Our competitions are designed with the goal to enhance the
                    momentum to build a global Social Business ecosystem by
                    empowering our youth as they move forward and change the
                    world with their innovative ideas.
                </p>
            </section>
            <section className="home-main-image">
                <img src={headerimage} alt="header" />
            </section>
            <section className="sbdc-home-image">
                <div id="blue-triangle-deco"></div>
                <img
                    src={randomlightbluedecoleft}
                    alt="deco"
                    id="light-deco-top-left"
                />
                <img src={sbdclogo} alt="sbdc-logo" />
                <img
                    src={randomlightbluedecoright}
                    alt="deco"
                    id="light-deco-bottom-right"
                />
            </section>
            <section className="sbdc-home-section">
                <div id="sbdc-blue-circle-deco" />
                <div className="flex-container">
                    <h4 className="sbdc-home-description">
                        Unleash your entrepreneurial potential to create a world
                        of three zeros by designing sustainable social business
                        models that combat real challenges.
                    </h4>
                    <div className="button-container">
                        <a href="" className="btn btn-blue">
                            Explore
                        </a>
                        <a className="btn btn-lightblue" href="">
                            Apply Now
                        </a>
                    </div>
                </div>
                <div id="sbdc-lightblue-circle-deco" />
            </section>
            <section className="sfdc-home-image">
                <img src={sfdclogo} alt="sfdc-logo" />
                <div id="lightblue-triangle-deco"></div>
            </section>
            <section className="sfdc-home-section">
                <div id="sfdc-blue-deco"></div>
                <div className="flex-container">
                    <h4 className="home-description">
                        Encapsulate the idea of social development by
                        reimagining a world without social problems by inspiring
                        creativity and innovation. Take real-world social
                        challenges and share your fictional solution by writing,
                        illustration, rhetoric, cinematography, animation, or
                        poster presentation.
                    </h4>
                    <div className="button-container">
                        <a href="#" className="btn btn-blue">
                            EXPLORE
                        </a>
                        <a className="btn btn-lightblue" href="#">
                            APPLY NOW
                        </a>
                    </div>
                </div>
                <div id="sfdc-skyblue-circle-deco"></div>
            </section>
        </section>
    );
}
