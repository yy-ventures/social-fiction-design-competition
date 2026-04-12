import "./MeetPeople.scss";

import WinnerImg from "../../../../assets/previous-people.png";
import NehaImg from "../../../../assets/finalist-1.png";
import WanImg from "../../../../assets/finalist-2.png";
import AnneImg from "../../../../assets/finalist-3.png";
import TyfurImg from "../../../../assets/finalist-4.png";

const MeetPeople = () => {
  return (
    <section className="sfdc-meet">
      <div className="sfdc-meet__block">
        <div className="sfdc-meet__heading">
          <h2>Meet the Previous Winner</h2>
          <span className="line" />
        </div>

        <div className="sfdc-meet__card sfdc-meet__card--winner">
          <img src={WinnerImg} alt="Winner" />
          <div className="sfdc-meet__info">
            <h4>Amit Kumar Mishra 20</h4>
            <p>Nepal</p>
          </div>
        </div>
      </div>
      <div className="sfdc-meet__block">
        <div className="sfdc-meet__heading">
          <h2>Meet the Previous finalists</h2>
          <span className="line" />
        </div>

        <div className="sfdc-meet__grid">
          <div className="sfdc-meet__card">
            <img src={NehaImg} alt="Neha" />
            <div className="sfdc-meet__info">
              <h4>Neha Sabu</h4>
              <p>India</p>
            </div>
          </div>

          <div className="sfdc-meet__card">
            <img src={WanImg} alt="Wan" />
            <div className="sfdc-meet__info">
              <h4>Wan Faizal Mohd</h4>
              <p>Malaysia</p>
            </div>
          </div>

          <div className="sfdc-meet__card">
            <img src={AnneImg} alt="Anne" />
            <div className="sfdc-meet__info">
              <h4>Anne Julienne Barcelona</h4>
              <p>USA</p>
            </div>
          </div>

          <div className="sfdc-meet__card">
            <img src={TyfurImg} alt="Tyfur" />
            <div className="sfdc-meet__info">
              <h4>Tyfur Rahman</h4>
              <p>Bangladesh</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default MeetPeople;