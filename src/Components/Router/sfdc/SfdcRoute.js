import React from "react";
import SfdcFaq from "./SfdcFaq/SfdcFaq";
import SfdcAwards from "./SfdcAwards/SfdcAwards";
import SfdcCategory from "./SfdcCategory/SfdcCategory";
import SfdcForm from "./SfdcForm/SfdcForm";
import SfdcHeader from "./SfdcHeader/SfdcHeader";
import SfdcSubmitIdea from "./SfdcSubmitIdea/SfdcSubmitIdea";
import SfdcWhoCanApply from "./SfdcWhoCanApply/SfdcWhoCanApply";
import SfdcFocusArea from "./SfdcFocusArea/SfdcFocusArea";
// Layout
import largeCircle from "../../../assets/sfdc/layout/large-circle.png";

import "./sfdc.scss";

const SfdcRoute = () => {
  return (
    <div className="sfdc-home">
      <SfdcFaq />
      {/* <img className="large-circle-layout" src={largeCircle} alt="layout" /> */}
      {/* <div className="main-content">
        <h1>SFDC Landing page</h1>
      </div> */}
    </div>
  );
};
export default SfdcRoute;
