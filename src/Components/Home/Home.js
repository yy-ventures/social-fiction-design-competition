import "./Home.scss";
import headerimage from "../../assets/images/header2x.jpg";
import sbdclogo from "../../assets/sbdc/logo/sbdc.png";
import sfdclogo from "../../assets/sfdc/logo/logo.png";
import randomlightbluedecoleft from "../../assets/images/fiction_el_2.png";
import randomlightbluedecoright from "../../assets/images/fiction_el_1.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home-main-section" id="aboutRoute">
      <section className="home-header">
        <div className="home-header-text">
          <h2>Introducing</h2>
          <h1>
            Competi<span>t</span>ions
          </h1>
        </div>
        <p className="home-header-description">
          Yunus Centre, in collaboration with YY Ventures, introduces the Social
          Business Design Competition and the Social Fiction Design Competition
          to nurture social innovation and entrepreneurship among the next
          generation of young talent. Our mission is to create a world of three
          zeros - zero net carbon emission, zero wealth concentration for ending
          poverty, and zero unemployment by unleashing entrepreneurship in all.
        </p>
        <p className="home-header-description">
          Our competitions are designed with the goal to enhance the momentum to
          build a global Social Business ecosystem by empowering our youth as
          they move forward and change the world with their innovative ideas.
        </p>
        <p className="home-header-description">
          Get a chance to be rewarded US $10,000 by submitting your idea to
          create the world you want to live in!
        </p>
      </section>
      <section className="home-main-image">
        <img src={headerimage} alt="header" />
      </section>
      <section className="sfdc-home-image">
        <div id="blue-triangle-deco"></div>
        <img src={sfdclogo} alt="sfdc-logo" />
      </section>
      <section className="sfdc-home-section" id="sfdcRoute">
        <div id="sfdc-blue-circle-deco" />
        <div className="flex-container">
          <h4 className="sfdc-home-description">
            A global competition encouraging youth to create Social Fiction by
            imagining a world we want to live in, a world free of social and
            environmental injustices that plague our communities. And it all
            starts with our imagination.
          </h4>
          <div className="button-container">
            <HashLink to="/sfdc#sdbcHeaderId" className="btn-home button-blue">
              Explore
            </HashLink>
            {/* <HashLink
              to="/sfdc-registration#sfdcRegId"
              className="btn-home button-skyblue"
            >
              Apply Now
            </HashLink> */}
            <HashLink to="#" className="btn-home button-skyblue">
              Application Closed
            </HashLink>
          </div>
        </div>
        <div id="sfdc-lightblue-circle-deco" />
      </section>
      <section className="sbdc-home-section">
        <div className="left-layout-container">
          <img src={randomlightbluedecoleft} alt="layout" />
        </div>
        <div className="logo-container">
          <div className="img-container">
            <img src={sbdclogo} alt="sbdc logo" />
          </div>
        </div>
        <div className="content-container">
          <h2>
            <span>PAST</span>
            <span>COMPETITIONS</span>
          </h2>
          <div className="text-container">
            <p>
              Unleash your entrepreneurial potential to create a world of three
              zeros by designing sustainable Social Business models that combat
              real challenges.
            </p>
          </div>
          <div className="btn-container">
            {/* temporary close */}
            {/* <HashLink to="/sbdc#sdbcHeaderId" className="btn-home button-blue">
              Read More
            </HashLink> */}
            <HashLink to="#" className="btn-home button-skyblue">
              Application Closed
            </HashLink>
          </div>
        </div>
      </section>

      {/* OLD SECTION OF SBDC*/}
      {/* <section className="sfdc-home-image">
        <img src={sbdclogo} alt="sfdc-logo" />
        <div id="lightblue-triangle-deco"></div>
      </section>
      <section className="sfdc-home-section" id="sfdcRoute">
        <div id="sfdc-blue-deco"></div>
        <div className="flex-container">
          <h4 className="home-description">
            Encapsulate the idea of social development by reimagining a world
            without social problems by inspiring creativity and innovation. Take
            real-world social challenges and share your social fiction.
          </h4>
          <div className="button-container">
            <HashLink to="/sfdc#sfdcHeaderId" className="btn-home button-blue">
              EXPLORE
            </HashLink>
            <HashLink
              to="/sfdc-registration#sfdcRegId"
              className="btn-home button-skyblue"
            >
              APPLY NOW
            </HashLink>
          </div>
        </div>
        <div id="sfdc-skyblue-circle-deco"></div>
      </section> */}
    </section>
  );
}
