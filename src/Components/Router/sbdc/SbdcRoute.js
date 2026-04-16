import SbdcEngage from "./SbdcForm/SbdcEngage";
import SbdcHeader from "./SbdcHeader/SbdcHeader";
import SbdcReward from "./SbdcReward/SbdcReward";
import SbdcTrack from "./SbdcTrack/SbdcTrack";
import SbdcWhoCanApply from "./SbdcWhoCanApply/SbdcWhoCanApply";
import SbdcFaq from "./SbdcFaq/SbdcFaq";

const SbdcRoute = () => {
  return (
    <div style={{ background: "#e9eff1", minHeight: "100vh" }}>
      <SbdcHeader />
      <SbdcReward />
      <SbdcWhoCanApply />
      <SbdcTrack />
      <SbdcEngage />
      <SbdcFaq />
    </div>
  );
};

export default SbdcRoute;
