import "./Home.scss";
import headerimage from "../../assets/images/header2x.jpg";
import sbdclogo from "../../assets/images/logos/sbdc2x.jpg";
import sfdclogo from "../../assets/images/logos/sfdc2x.jpg";
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
          Yunus Centre, in collaboration with YY Ventures, Yunus and You- The YY Foundation and the Catholic University
          of Zimbabwe, is hosting the
          <a href="/"> Social Business Design Competition</a> and
          <a href="/"> Social Fiction Design Competition</a> to nurture social innovation and entrepreneurship among the
          next generation of young talent. Our mission is to create a world of three zeros - zero net carbon emission,
          zero wealth concentration for ending poverty, and zero unemployment by unleashing entrepreneurship in all.
        </p>
        <p className="home-header-description">
          Our competitions are designed with the goal to enhance the momentum to build a global Social Business
          ecosystem by empowering our youth as they move forward and change the world with their innovative ideas.
        </p>
        <p className="home-header-description">
          Get a chance to be rewarded US $10,000 by submitting your idea to create the world you want to live in!
        </p>
        <div className="apply-btn-container">
          {/* <Link to="/sbdc-registration">Apply to Social Business Design Competition</Link> */}
          <Link to="/sfdc-registration">Apply to Social Fiction Design Competition</Link>
        </div>
      </section>
      <section className="home-main-image">
        <img src={headerimage} alt="header" />
      </section>
      <section className="sbdc-home-image">
        <div id="blue-triangle-deco"></div>
        <img src={randomlightbluedecoleft} alt="deco" id="light-deco-top-left" />
        <img src={sbdclogo} alt="sbdc-logo" />
        <img src={randomlightbluedecoright} alt="deco" id="light-deco-bottom-right" />
      </section>
      <section className="sbdc-home-section" id="sbdcRoute">
        <div id="sbdc-blue-circle-deco" />
        <div className="flex-container">
          <h4 className="sbdc-home-description">
            Unleash your entrepreneurial potential to create a world of three zeros by designing sustainable Social
            Business models that combat real challenges.
          </h4>
          <div className="button-container">
            <HashLink to="/sbdc#sdbcHeaderId" className="btn-home button-blue">
              Explore
            </HashLink>
            <HashLink to="/sbdc-registration#sbdcRegId" className="btn-home button-skyblue">
              Apply Now
            </HashLink>
          </div>
        </div>
        <div id="sbdc-lightblue-circle-deco" />
      </section>
      <section className="sfdc-home-image">
        <img src={sfdclogo} alt="sfdc-logo" />
        <div id="lightblue-triangle-deco"></div>
      </section>
      <section className="sfdc-home-section" id="sfdcRoute">
        <div id="sfdc-blue-deco"></div>
        <div className="flex-container">
          <h4 className="home-description">
            Encapsulate the idea of social development by reimagining a world without social problems by inspiring
            creativity and innovation. Take real-world social challenges and share your fictional solution by writing,
            illustration, rhetoric, cinematography, animation, or poster presentation.
          </h4>
          <div className="button-container">
            <HashLink to="/sfdc#sfdcHeaderId" className="btn-home button-blue">
              EXPLORE
            </HashLink>
            <HashLink to="/sfdc-registration#sfdcRegId" className="btn-home button-skyblue">
              APPLY NOW
            </HashLink>
          </div>
        </div>
        <div id="sfdc-skyblue-circle-deco"></div>
      </section>
    </section>
  );
}
