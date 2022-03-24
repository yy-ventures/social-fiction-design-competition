import React from "react";
import SfdcFaq from "./SfdcFaq/SfdcFaq";
import SfdcAwards from "./SfdcAwards/SfdcAwards";
import SfdcCategory from "./SfdcCategory/SfdcCategory";
import SfdcForm from "./SfdcForm/SfdcForm";
import SfdcHeader from "./SfdcHeader/SfdcHeader";
import SfdcSubmitIdea from "./SfdcSubmitIdea/SfdcSubmitIdea";
import SfdcWhoCanApply from "./SfdcWhoCanApply/SfdcWhoCanApply";
import SfdcFocusArea from "./SfdcFocusArea/SfdcFocusArea";

const SfdcRoute = () => {
  return (
    <div>
      <SfdcHeader />
      <SfdcWhoCanApply />
      <SfdcAwards />
      <SfdcCategory />
      <SfdcSubmitIdea />
      <SfdcFocusArea/>
      <SfdcFaq />
      <SfdcForm />
    </div>
  );
};
export default SfdcRoute;
