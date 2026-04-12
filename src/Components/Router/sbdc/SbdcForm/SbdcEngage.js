import "./SbdcEngage.scss";
import FbIcon from "../../../../assets/fb-icon.png";
import WhatsAppIcon from "../../../../assets/whats-icon.png";
import WebIcon from "../../../../assets/web-icon.png";

const SbdcEngage = () => {
  return (
    <section className="sbdc-engage">
      <div className="engage-container">
        
        <h2>Engage with us!</h2>

        <p>
          Comment how you imagine the life of a young person in the world of 2050
        </p>
        <div className="engage-icons">
          <img src={FbIcon} alt="facebook" />
          <img src={WhatsAppIcon} alt="whatsapp" />
          <img src={WebIcon} alt="website" />
        </div>

      </div>
    </section>
  );
};

export default SbdcEngage;