import React, { useEffect, useState } from "react";
import areaOfFocus from "../../../assets/Data/areaOfFocus";
import countries from "../../../assets/Data/country";
import countryCodeList from "../../../assets/Data/countryCodes.json";
import gender from "../../../assets/Data/gender";
import typeOfContent from "../../../assets/Data/typeOfContent";
import "./SFDCInputs.scss";

// components
import DraftPopup from "../components/draft-popup/DraftPopup";

import { useHistory } from "react-router-dom";

const SFDCInputs = () => {
  // Form state
  const [draftName, setDraftName] = useState("");
  const [draftInstitution, setDraftInstitution] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [countryCodeSelected, setCountryCodeSelected] = useState("");
  const [draftValidPhoneNumber, setDraftValidPhoneNumber] = useState("");
  const [draftValidEmail, setDraftValidEmail] = useState("");
  const [draftDOB, setDraftDOB] = useState("");
  const [draftCountry, setDraftCountry] = useState("");
  const [draftGender, setDraftGender] = useState("");
  const [draftAreaOfFocusChange, setDraftAreaOfFocusChange] = useState("");
  const [draftOtherSocialProblem, setDraftOtherSocialProblem] = useState("");
  const [draftYourSocialProblem, setDraftYourSocialProblem] = useState("");
  const [draftSocialFictionUnique, setDraftSocialFictionUnique] = useState("");
  const [draftSolutionImpact, setDraftSolutionImpact] = useState("");
  const [draftURL, setDraftURL] = useState("");
  const [draftCategory, setDraftCategory] = useState("");

  // user state
  const [userID, setUserID] = useState("");
  const [userPass, setUserPass] = useState("");
  const [draftSuccess, setDraftSuccess] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // App Id
  const app_id = localStorage.getItem("app_id");
  const [filledForm, setFilledForm] = useState([]);

  const [fileFormat, setfileFormat] = useState("writing");

  const [fileAcceptStr, setFileAcceptStr] = useState(
    "application/msword, application/vnd.ms-excel, .doc, .docx, application/pdf,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.slideshow,application/vnd.openxmlformats-officedocument.presentationml.presentation"
  );

  const [isSaving, setIsSaving] = useState(false);
  const [isSaveDisabled, setIsSaveDisabled] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const [showFileUpload, setShowFileUpload] = useState(true);
  const [fileSizeTest, setFileSizeTest] = useState([]);

  // Base Url
  const baseUrl = process.env.REACT_APP_BASE_URL;
  let history = useHistory();
  useEffect(() => {
    fetch(`${baseUrl}/get-app-draft-data?app_id=${app_id}`)
      .then((res) => res.json())
      .then((data) => {
        setFilledForm(data.data && data.data);
        setDraftName(data.data && data.data.name_of_applicant);
        setDraftInstitution(data.data && data.data.name_of_institution);
        setCountryCode(data.data && data.data.country_code);
        setDraftValidPhoneNumber(data.data && data.data.phone);
        setDraftValidEmail(data.data && data.data.email);
        setDraftDOB(data.data && data.data.date_of_birth);
        setDraftCountry(data.data && data.data.country);
        setDraftGender(data.data && data.data.gender);
        setDraftAreaOfFocusChange(data.data && data.data.area_of_focus);
        setDraftOtherSocialProblem(data.data && data.data.other_social_problem);
        setDraftYourSocialProblem(data.data && data.data.social_problems);
        setDraftSocialFictionUnique(data.data && data.data.unique_solutions);
        setDraftSolutionImpact(data.data && data.data.impact_of_fictional_solution);
        setDraftCategory(data.data && data.data.type_of_content);
      });
  }, [app_id]);

  useEffect(() => {
    console.log(filledForm);
  }, [filledForm]);

  const formatString = {
    rhetoric: "Format: .mp3, .mp4, or .avi",
    animation: "Format: .mp4 and .mov",
    poster_presentation: "Format: .pdf, .jpeg, .jpg and, .png",
    writing: "Format: .pdf",
    illustration: "Format: .jpeg, jpg and .png",
    cinematography: "Format: .mp4 and .mov",
  };

  const formatAccept = {
    rhetoric: "audio/*,video/mp4,video/x-m4v,video/quicktime",
    animation: "video/mp4,video/x-m4v,video/quicktime",
    poster_presentation: ".pdf, .jpeg, .jpg, .png",
    writing:
      "application/msword, application/vnd.ms-excel, .doc, .docx, application/pdf,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.slideshow,application/vnd.openxmlformats-officedocument.presentationml.presentation",
    illustration: ".jpeg,.jpg,.png",
    cinematography: "video/mp4,video/x-m4v,video/quicktime",
  };

  const handleChange = (e) => {
    setfileFormat(e.target.value);
    setFileAcceptStr(e.target.value);
    setDraftCategory(e.target.value);

    if (
      formatString[e.target.value] === formatString.rhetoric ||
      formatString[e.target.value] === formatString.animation ||
      formatString[e.target.value] === formatString.cinematography
    ) {
      setShowFileUpload(false);
    } else {
      setShowFileUpload(true);
    }
  };

  const mainForm = document.querySelector("#sfdcInputForm");

  // code test
  const handleTestChange = (e) => {
    // draft category set to "writing" only, if the number of category increases remove this piece of code
    setDraftCategory("Writing");

    let files = e.target.files;
    let getLimit = 2097152;
    for (let j = 0; j < files.length; j++) {
      if (files[j].size > getLimit) {
        alert(`Please upload your file between 2MB, your file is ${Math.round(files[j].size / 1048576)}MB`);
        e.target.value = "";
      } else {
        setFileSizeTest(files);
      }
    }
  };

  const HandleOtherSocialProblem = (e) => {
    setDraftOtherSocialProblem(e.target.value);
  };

  const handleName = (e) => {
    if (e.target.value === "") {
      alert("Name is required!");
    } else {
      setDraftName(e.target.value);
    }
  };

  const handleInstitution = (e) => {
    if (e.target.value === "") {
      alert("Institute is required!");
    } else {
      setDraftInstitution(e.target.value);
    }
  };

  const handleValidEmail = (e) => {
    let emailFilter = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
    if (emailFilter.test(e.target.value) && e.target.value !== "") {
      setDraftValidEmail(e.target.value);
    } else {
      alert("Invalid Email!");
    }
  };

  const HandleValidPhoneNumber = (e) => {
    let phoneNumber = e.target.value;
    if (isNaN(phoneNumber) || Number(phoneNumber) < 0) {
      alert("Please Input a Valid number!");
      setDraftValidPhoneNumber("");
    } else {
      setDraftValidPhoneNumber(phoneNumber);
    }
  };

  const handleDOB = (e) => {
    if (e.target.value === "") {
      alert("Date of Birth is required!");
    } else {
      setDraftDOB(e.target.value);
    }
  };

  const handleCountry = (e) => {
    setDraftCountry(e.target.value);
    setCountryCodeSelected(e.target.selectedIndex);

    const { dial_code: countryCode } = countryCodeList.filter((data, index) => index === e.target.selectedIndex - 1)[0];
    setCountryCode(countryCode);
  };

  const handleGender = (e) => {
    setDraftGender(e.target.value);
  };

  const handleAreaOfFocus = (e) => {
    e.preventDefault();
    let areaOfFocusValue = e.target.value;
    setDraftAreaOfFocusChange(areaOfFocusValue);
  };

  const handleYourSocialProblem = (e) => {
    if (e.target.value.split(" ").length - 1 > 99) {
      alert("Please Describe in 100 words");
    } else {
      setDraftYourSocialProblem(e.target.value);
    }
  };

  const handleFictionUnique = (e) => {
    if (e.target.value.split(" ").length - 1 > 99) {
      alert("Please Describe in 100 words");
    } else {
      setDraftSocialFictionUnique(e.target.value);
    }
  };

  const handleSolutionImpact = (e) => {
    if (e.target.value.split(" ").length - 1 > 99) {
      alert("Please Describe in 100 words");
    } else {
      setDraftSolutionImpact(e.target.value);
    }
  };

  const handleURL = (e) => {
    setDraftURL(e.target.value);
  };

  const [formTitle, setFormTitle] = useState("submit");

  let newApp_id = localStorage.getItem("app_id");

  const handleSaveTitle = () => {
    setFormTitle("save");
  };
  const handleSubmitTitle = () => {
    setFormTitle("submit");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // save data
    if (formTitle === "save") {
      let headers = new Headers();
      let formdata = new FormData();

      setIsSaving(true);
      setIsSaveDisabled(true);

      formdata.append("name_of_applicant", draftName);
      formdata.append("name_of_institution", draftInstitution);
      formdata.append("country_code", countryCode);
      formdata.append("phone", draftValidPhoneNumber);
      formdata.append("email", draftValidEmail);
      formdata.append("date_of_birth", draftDOB);
      formdata.append("gender", draftGender);
      formdata.append("country", draftCountry);
      formdata.append("area_of_focus", draftAreaOfFocusChange);
      formdata.append("social_problems", draftYourSocialProblem);
      formdata.append("other_social_problem", draftOtherSocialProblem);
      formdata.append("unique_solutions", draftSocialFictionUnique);
      formdata.append("impact_of_fictional_solution", draftSolutionImpact);
      formdata.append("type_of_content", draftCategory || "writing");
      formdata.append("submission_type", "draft");
      formdata.append("app_id", newApp_id ? newApp_id : "");

      let letters = ["rhetoric", "animation", "cinematography"];
      let result = letters.includes(draftCategory);

      if (fileSizeTest.length <= 0) {
        formdata.append(`file_of_idea`, "");
      } else {
        for (let i = 0; i < fileSizeTest.length; i++) {
          let getFiles = fileSizeTest[i];
          formdata.append(`file_of_idea[${i}]`, getFiles);
        }
      }

      let requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
        headers: headers,
      };

      fetch(`${baseUrl}/sfdc/create`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          // console.log((draftPopup = false));
          if (data.success) {
            // console.log(data.responses);
            setUserID(data.responses.app_id);
            setUserPass(data.responses.generated_password);
            setDraftSuccess(true);
            // <DraftPopup userID={userID} userPass={userPass} />;
            // alert(
            //   `Your Application Saved! Your User ID is : ${
            //     data.responses.app_id
            //   } and password is: ${data.responses?.generated_password || ""}`
            // );
            // localStorage.setItem("app_id", data.responses.app_id);
            setIsSaving(false);
            setIsSaveDisabled(false);
            setDraftOtherSocialProblem("");
          }
          if (data.success === false) {
            setIsSaving(false);
            setIsSaveDisabled(false);
            alert("Something went wrong");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    // submit data
    if (formTitle === "submit") {
      let headers = new Headers();
      let formdata = new FormData();

      setIsSubmitting(true);
      setIsDisabled(true);

      formdata.append("name_of_applicant", draftName);
      formdata.append("name_of_institution", draftInstitution);
      formdata.append("country_code", countryCode);
      formdata.append("phone", draftValidPhoneNumber);
      formdata.append("email", draftValidEmail);
      formdata.append("date_of_birth", draftDOB);
      formdata.append("gender", draftGender);
      formdata.append("country", draftCountry);
      formdata.append("area_of_focus", draftAreaOfFocusChange);
      formdata.append("social_problems", draftYourSocialProblem);
      formdata.append("other_social_problem", draftOtherSocialProblem === "" ? "null" : draftOtherSocialProblem);
      formdata.append("unique_solutions", draftSocialFictionUnique);
      formdata.append("impact_of_fictional_solution", draftSolutionImpact);
      formdata.append("type_of_content", draftCategory || "writing");
      formdata.append("submission_type", "submission");
      formdata.append("app_id", app_id);

      let letters = ["rhetoric", "animation", "cinematography"];
      let result = letters.includes(draftCategory);

      let getFiles;
      if (fileSizeTest.length <= 0) {
        // formdata.append(`file_of_idea`, draftURL);
        formdata.append(`file_of_idea`, "");
      } else {
        for (let i = 0; i < fileSizeTest.length; i++) {
          getFiles = fileSizeTest[i];
          formdata.append(`file_of_idea[${i}]`, getFiles);
        }
      }
      let file;
      if (getFiles || filledForm?.file_of_idea !== "" || filledForm?.file_of_idea?.length > 0) {
        file = true;
      }

      let requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
        headers: headers,
      };

      if (
        draftName &&
        draftInstitution &&
        draftValidPhoneNumber &&
        draftValidEmail &&
        draftGender &&
        draftDOB &&
        draftCountry &&
        draftAreaOfFocusChange &&
        draftYourSocialProblem &&
        draftYourSocialProblem &&
        draftSocialFictionUnique &&
        draftSolutionImpact &&
        draftCategory &&
        file
      ) {
        fetch(`${baseUrl}/sfdc/create`, requestOptions)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.success) {
              // alert("Thank you for the application!");
              setSubmitSuccess(true);
              setIsSubmitting(false);
              setIsDisabled(false);
              mainForm.reset();
              setDraftOtherSocialProblem("");

              // console.log("success");
              // history.push("/");
              localStorage.removeItem("app_id");
              localStorage.removeItem("name");
              localStorage.removeItem("token");
            }
            if (data.success === false) {
              setIsSubmitting(false);
              setIsDisabled(false);

              console.log("fail");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        alert("Some form Fields are Missing! Please re  select your Country, Gender, Fictional World Address Field!");
        setIsSubmitting(false);
        setIsDisabled(false);
      }
    }
  };

  return (
    <div className="sfdc-registration-input">
      <div className="form-input-header text-center mt-5">
        {/* <p>
                    *Please fill up this form to submit your idea if you are of{" "}
                    <span className="bold">age 12 to 35.</span>
                </p> */}
      </div>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <form
            encType="multipart/form-data"
            className="registration-main-form"
            onSubmit={handleSubmit}
            id="sfdcInputForm"
            title={formTitle}
          >
            <div className="row">
              <div className="mt-5 col-lg-6">
                <h5>
                  Name of Applicant <span className="red">*</span>
                </h5>
                <input
                  type="text"
                  defaultValue={filledForm !== null ? filledForm.name_of_applicant : ""}
                  onChange={handleName}
                  required
                />
              </div>
              <div className="mt-5 col-lg-6">
                <h5>
                  Name of Institution <span className="red">*</span>
                </h5>
                <input
                  type="text"
                  defaultValue={filledForm !== null ? filledForm.name_of_institution : ""}
                  onChange={handleInstitution}
                  required
                />
              </div>
            </div>
            <div className="row mt-5">
              <div className="mt-5 col-lg-6">
                <h5>
                  Date of Birth of Applicant <span className="red">*</span>
                </h5>
                <input
                  type="date"
                  defaultValue={filledForm !== null ? filledForm.date_of_birth : ""}
                  onChange={handleDOB}
                  required
                />
              </div>

              <div className="mt-5 col-lg-6">
                <h5>
                  Gender <span className="red">*</span>
                </h5>
                <select onChange={handleGender} className="form-select mt-3">
                  <option>Select gender</option>
                  {gender.map((gd, index) => (
                    <option key={index} selected={gd.value === filledForm?.gender} value={gd.value}>
                      {gd.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row mt-5">
              <div className="mt-5 col-lg-6">
                <h5>
                  Country <span className="red">*</span>
                </h5>
                <select className="form-select" onChange={handleCountry} required>
                  <option>Select Country</option>
                  {countryCodeList.map((country, index) => (
                    <option key={index} selected={country.name === filledForm?.country} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-5 col-lg-6">
                <h5>
                  E-mail <span className="red">*</span>
                </h5>
                <input
                  type="email"
                  defaultValue={filledForm !== null ? filledForm.email : ""}
                  onBlur={handleValidEmail}
                  required
                />
              </div>
            </div>

            <div className="row mt-5 register-gender">
              <div className="mt-5 mb-5 col-lg-8">
                <h5>
                  Phone
                  <span className="red">
                    * <br />
                    <span>
                      <i>
                        We choose to communicate internationally on WhatsApp. Please provide a phone number we can use
                        to connect with you on Whatsapp.
                      </i>
                    </span>
                  </span>
                </h5>
                <div className="phone-input">
                  <select
                    className="form-select"
                    name=""
                    id=""
                    onChange={(e) => {
                      setCountryCodeSelected(e.target.selectedIndex);
                      setCountryCode(e.target.value);
                    }}
                  >
                    <option value="none" selected>
                      Country Code
                    </option>
                    {countryCodeList?.map(({ name, dial_code }, index) => {
                      return (
                        <option
                          key={index}
                          value={dial_code}
                          style={countryCodeSelected - 1 === index ? { textAlign: "right" } : null}
                          selected={filledForm?.country_code === dial_code || name === draftCountry}
                        >
                          {countryCodeSelected - 1 === index ? dial_code : `${name} (${dial_code})`}
                        </option>
                      );
                    })}
                  </select>
                  <input
                    type="text"
                    defaultValue={filledForm !== null ? filledForm.phone : ""}
                    onChange={HandleValidPhoneNumber}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="extra-title mt-5">
              <p>Imagine the life of a young person in the world of 2050.</p>
              <p>Visualise how this fictional world of the future is different from the world we live in now.</p>
            </div>
            {/* area of focus */}
            <div className="row mt-3 register-focus d-flex align-items-center">
              <div className="col-lg-8">
                {/* <h5>What social problem are you addressing?</h5> */}
                <h5>
                  What key social or environmental issues does this fictional world of yours address?
                  <span className="red"> *</span>
                </h5>
              </div>
              <div className="col-lg-4">
                <select className="form-select" onChange={handleAreaOfFocus}>
                  <option>Select Area Of Focus</option>
                  {areaOfFocus.map((newArea, index) => (
                    <option key={index} selected={newArea.value === filledForm?.area_of_focus} value={newArea.value}>
                      {newArea.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-lg-4">
                {draftAreaOfFocusChange === "others" ? (
                  <div>
                    <label>If others, please specify:</label>
                    <input
                      type="text"
                      defaultValue={filledForm !== null ? filledForm.other_social_problem : ""}
                      onChange={HandleOtherSocialProblem}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-12 mt-5">
                <h5>
                  Tell us a bit about the fictional world you have imagined for the year 2050.
                  <span className="red"> *</span>
                  <br />
                  <span className="bold"> In maximum 10 sentences.</span>
                </h5>
                <textarea
                  type="text"
                  defaultValue={filledForm.social_problems !== "undefined" ? filledForm?.social_problems : ""}
                  onBlur={handleYourSocialProblem}
                ></textarea>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-12 mt-5">
                <h5>
                  What makes your solution Social Fiction unique? <span className="red">*</span>
                  <br />
                  <span className="bold"> In maximum 10 sentences.</span>
                </h5>
                <textarea
                  defaultValue={filledForm !== null ? filledForm.unique_solutions : ""}
                  onChange={handleFictionUnique}
                ></textarea>
              </div>
            </div>
            <div className="mt-5">
              <div className="col-lg-12 pt-5">
                <h5>
                  What impact on the environment, economy and/or communities do you see in your fictional world in 2050?
                  <span className="red"> *</span> <br />
                  <span className="bold"> In maximum 10 sentences.</span>
                </h5>
                <textarea
                  defaultValue={filledForm !== null ? filledForm.impact_of_fictional_solution : ""}
                  onChange={handleSolutionImpact}
                ></textarea>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-8 mt-5">
                <h5 className="extra-headline">
                  <strong>
                    Write 1000-5000 words of a Social Fiction about what this fictional world in 2050 looks like.
                  </strong>
                  <div className="extra-title">
                    <br />
                    <p>What does this world look like? .</p>
                    <p>What makes it different from the world we live in now? </p>
                    <p>What are some of the innovations and advancements made? </p>
                    <p>Who are the key players in this fictional world?</p>
                  </div>
                  <br />
                  Upload your social fiction.<span className="red"> *</span>
                </h5>
              </div>
              <div className="col-lg-4 mt-5">
                {/* <select className="form-select" onChange={handleChange}>
                  <option selected>Select Category</option>
                  {typeOfContent.map((contentType, index) => (
                    <option key={index} value={contentType.value}>
                      {contentType.title}
                    </option>
                  ))}
                </select> */}
              </div>
              <div className="col-lg-4 mt-3">
                {showFileUpload && (
                  <div className="file-upload">
                    <div>
                      <input
                        className="form-control"
                        type="file"
                        id="formFile"
                        accept="application/pdf"
                        multiple
                        onChange={handleTestChange}
                      />
                    </div>
                    <div className="col-lg-3">
                      <div className="file-upload-condition"></div>
                    </div>
                  </div>
                )}
              </div>
              {/* {filledForm?.file_of_idea?.map((data, index) => (
                <a key={index} href={`https://stage-sbdc-sfdc.yyventures.org/${data}`}>
                  Download
                </a>
              ))} */}
            </div>
            {showFileUpload && <p className="mt-3 col-lg-4">{formatString.writing}</p>}

            {filledForm?.file_of_idea &&
              filledForm?.file_of_idea?.map((file, index) => {
                return (
                  <div key={index} className="mt-3">
                    <a href={`https://stage-sbdc-sfdc.yyventures.org/${file}`}>
                      <button type="button">Download</button>
                    </a>
                  </div>
                );
              })}

            {/* {!showFileUpload && (
              <div className="row mt-5 file-link-notification">
                <h5>
                  Upload your file to a cloud drive (we recommend google drive), then share the link with us{" "}
                  <span className="red">*</span>
                </h5>
                <input className="form-control" type="text" onBlur={handleURL} />
              </div>
            )} */}
            <div className="mt-5 text-center submit-button">
              <button type="save" disabled={isSaveDisabled} onClick={handleSaveTitle} className="mx-1 save mx-b">
                {isSaving ? "Saving..." : "Save Application"}
              </button>
              <button type="submit" disabled={isDisabled} onClick={handleSubmitTitle} className="mx-1 mx-b">
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-2"></div>
      </div>
      {draftSuccess && <DraftPopup text="Your Submission is saved!" userID={userID} userPass={userPass} />}
      {submitSuccess && <DraftPopup text="Thank you for your submission!" />}
    </div>
  );
};

export default SFDCInputs;
