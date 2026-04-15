import "./Footer.scss";
import Media from "../../Router/sfdc/component/media/media";
// import yunusLogo from "../../../assets/images/logos/yc-white.png";
import yyvLogo from "../../../assets/images/logos/yyv-white.png";


const Footer = () => {
  return (
    <footer className="main-footer" id="contactRoute">
      <div className="main-footer__container">
        <div className="brought-by">
          <h3>Brought to you by</h3>
          <div className="logo-container">
            {/* <a href="/">
              <img src={yunusLogo} alt="yunus-logo" />
            </a> */}
            <a href="https://yy.ventures/" target="__blank">
              <img src={yyvLogo} alt="yyv-logo" />
            </a>
          </div>
          <span className="reserved-1">
            © 2026 YY Ventures. All rights reserved.
          </span>
        </div>
        <div className="find-us">
          <h3>Find us at</h3>
          <p>A: Level 9,</p>
          <p>Grameen Telecom, Trust Bhaban,</p>
          <p>Zoo Road, Dhaka 1216,</p>
          <p>Bangladesh</p>
        </div>
        <div className="write-us">
          <h3>Write to us</h3>
          <p>E: info@yy.ventures</p>
          <p>WhatsApp: +880 1648-397420 </p>
          <Media />
        </div>
        <span className="reserved-2">
          © 2026 YY Ventures. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
