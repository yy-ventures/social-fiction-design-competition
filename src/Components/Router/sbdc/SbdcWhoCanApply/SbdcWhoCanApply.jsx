import "./SbdcWhoCanApply.scss";
import Apply from "../../../../assets/apply/apply.png";
import YunusImg from "../../../../assets/dr-yunus.png";

const SbdcWhoCanApply = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <div className="hero__text">
            <h1>
              Think bold <br />
              Think impactful <br />
              Think sustainable
            </h1>

            <ul className="main-list">
              <li>
                Create a Social Business that addresses a real-world problem and
                contributes to building a better future.
              </li>

              <li>
                Prepare a presentation slide deck outlining:
                <ul className="sub-list">
                  <li>What the business is about</li>
                  <li>The problem it is solving</li>
                  <li>The proposed solution</li>
                  <li>Revenue model</li>
                  <li>Financial sustainability approach</li>
                  <li>Expected social impact</li>
                </ul>
              </li>

              <li>
                Address one or more goals of building a World of Three Zeros:
                <ul className="sub-list">
                  <li>Zero Net Carbon Emissions</li>
                  <li>Zero Wealth Concentration to End Poverty</li>
                  <li>
                    Zero Unemployment by Unleashing Entrepreneurship for All
                  </li>
                </ul>
              </li>

              <li>
                Fill up the online application form and submit your Social
                Business idea.
              </li>
            </ul>
          </div>

          <div className="hero__image">
            <img src={Apply} alt="Apply illustration" />
          </div>
        </div>
      </section>

      <section className="apply-bottom">
        <div className="apply-bottom__container">
          <div className="apply-bottom__left">
            <div className="benefit-item">
              <div className="icon">👥</div>
              <p>
                <strong>No age</strong> <br />
                restrictions
              </p>
            </div>

            <div className="benefit-item">
              <div className="icon">🌍</div>
              <p>
                <strong>No geographical</strong> <br />
                limitations
              </p>
            </div>
          </div>
          <div className="apply-bottom__right">
            <h2>
              Everyone is welcome <br />
              to participate
            </h2>
          </div>
        </div>
      </section>
      <section className="quote-section">
        <div className="quote-section__container">
          <div className="quote-section__text">
            <p className="quote">
              “I'm encouraging young people to become Social Business
              entrepreneurs and contribute to the world, rather than just making
              money.”
            </p>
            <p className="author">
              <strong>Professor Muhammad Yunus</strong>
              <br />
              2006 Nobel Peace Laureate
            </p>
          </div>

          <div className="quote-section__image">
            <img src={YunusImg} alt="Muhammad Yunus" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SbdcWhoCanApply;
