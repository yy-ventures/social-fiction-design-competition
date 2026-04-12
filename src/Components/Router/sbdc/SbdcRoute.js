import React from "react";
import SbdcEngage from "./SbdcForm/SbdcEngage";
import SbdcHeader from "./SbdcHeader/SbdcHeader";
import SbdcReward from "./SbdcReward/SbdcReward";
import SbdcTrack from "./SbdcTrack/SbdcTrack";
import SbdcWhoCanApply from "./SbdcWhoCanApply/SbdcWhoCanApply";

const SbdcRoute = () => {
  // const title = document.getElementsByTagName
  return (
    <div>
      <SbdcHeader />
      <SbdcReward />
      <SbdcWhoCanApply />
      <SbdcTrack />
      {/* <SbdcTimeline />
      <SbdcSubmitIdea />
      <SbdcFaq /> */}
      <SbdcEngage />
    </div>
  );
};

export default SbdcRoute;
