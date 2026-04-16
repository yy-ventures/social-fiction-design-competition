import "./Footer.scss";
import Media from "../../Router/sfdc/component/media/media";



const Footer = () => {
  return (
    <footer className="main-footer" id="contactRoute">
      <div className="main-footer__container">
        <div className="brought-by">
           <Media />
          <span className="reserved-1">
            © 2026 YY Ventures. All rights reserved.
          </span>
        </div>
        <div className="find-us">
          <h3>Find us at</h3>
          <p>A: 9th Floor,</p>
          <p>Grameen Bank Bhaban,</p>
          <p>Mirpur-2, Dhaka 1216,</p>
          <p>Bangladesh</p>
        </div>
        <div className="write-us">
          <h3>Write to us</h3>
          <p>E: info@yy.ventures</p>
          <p>WhatsApp: +880 1648-397420 </p>
         
        </div>
        {/* <span className="reserved-2">
          © 2026 YY Ventures. All rights reserved.
        </span> */}
      </div>
    </footer>
  );
};

export default Footer;
