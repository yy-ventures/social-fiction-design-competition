import React from "react";
import SfdcFaq from "./SfdcFaq/SfdcFaq";
import SfdcAwards from "./SfdcAwards/SfdcAwards";
import SfdcCategory from "./SfdcCategory/SfdcCategory";
import SfdcForm from "./SfdcForm/SfdcForm";
import SfdcHeader from "./SfdcHeader/SfdcHeader";
import SfdcSubmitIdea from "./SfdcSubmitIdea/SfdcSubmitIdea";
import SfdcWhoCanApply from "./SfdcWhoCanApply/SfdcWhoCanApply";

const SfdcRoute = () => {
  return (
    <div>
      <SfdcHeader />
      <SfdcWhoCanApply />
      <SfdcCategory />
      <SfdcAwards />
      <SfdcSubmitIdea />
      <SfdcFaq />
      <SfdcForm />
    </div>
  );
};

export default SfdcRoute;
