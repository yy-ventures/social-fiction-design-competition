import SbdcEngage from "./SbdcForm/SbdcEngage";
import SbdcHeader from "./SbdcHeader/SbdcHeader";
import SbdcReward from "./SbdcReward/SbdcReward";
import SbdcTrack from "./SbdcTrack/SbdcTrack";
import SbdcWhoCanApply from "./SbdcWhoCanApply/SbdcWhoCanApply";
import SbdcFaq from "./SbdcFaq/SbdcFaq";
import { useEffect } from "react";

const SbdcRoute = () => {
    useEffect(() => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSeq913c1cLkp3N5A73O85mtYUZ0-1E57sJ0VFbUAYHI0CYNQA/viewform";
  }, []);
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
