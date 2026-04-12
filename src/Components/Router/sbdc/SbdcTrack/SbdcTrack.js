import "./SbdcTrack.scss";
import Light from "../../../../assets/light.png";
import UpperBg from "../../../../assets/solution-bg.png"

const SbdcTrack = () => {
  return (
    <section className="sbdc-track">
      <div className="track-banner"  style={{ backgroundImage: `url(${UpperBg})` }}>
        <div className="track-banner__content">
          <p>Want to build</p>
          <h2>a solution for</h2>
          <p>a better world?</p>
          <button>
            Complete Now <span>→</span>
          </button>
        </div>
      </div>

      <div className="track-body">
        <div className="track-left">
          <h3>Help us to<br />build<br />the future!</h3>
        </div>

        <div className="track-right">
          <img
            src={Light}
            alt="lightbulb"
          />
        </div>
      </div>

    </section>
  );
};

export default SbdcTrack;