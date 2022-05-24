import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./SbdcInputs.scss";

const SbdcInputs = () => {
  const [areaOfFocusChange, setAreaOfFocusChange] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [fileSizeTest, setFileSizeTest] = useState([]);

  // Base Url
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAreaOfFocus = (e) => {
    e.preventDefault();
    let areaOfFocusValue = e.target.value;
    setAreaOfFocusChange(areaOfFocusValue);
  };

  // code test
  const handleTestChange = (e) => {
    let files = e.target.files[0];
    let getLimit = 2097152;

    if (files.size > getLimit) {
      alert(
        `Please upload your file between 2MB, your file is ${Math.round(files.size / 1048576)}MB`
      );
      e.target.value = "";
    } else {
      setFileSizeTest(files);
    }
  };

  const mainForm = document.querySelector("#sbdcInputForm");

  const onSubmit = (data) => {
    let headers = new Headers();

    setIsSubmitting(true);
    setIsDisabled(true);

    let formdata = new FormData();

    formdata.append("name_of_business", data.NameOfSocialBusiness);
    formdata.append("vision", data.YourVision);
    formdata.append("initiative_plan", data.YourInitiative);
    formdata.append("founder_type", data.FounderType);
    formdata.append("focus_area", data.AreaOfFocus);
    formdata.append("country", data.ApplicantCountry);
    formdata.append("other_focus_area", data.OtherAreaOfFocus);
    formdata.append("reducing_carbon_emission", data.ReducingCarbonEmission);
    formdata.append("innovation", data.BringingToYourMarket);
    formdata.append("info_enterprise", data.EnterpriseInnovation);
    formdata.append("make_money_plan", data.MakeMoney);
    formdata.append("stage_of_ventures", data.StageOfVentures);
    formdata.append("is_way_of_more_to_learn", 1);
    formdata.append("way_of_more_to_learn_one", data.FirstLink);
    formdata.append("way_of_more_to_learn_tow", data.SecondLink);
    formdata.append("way_of_more_to_learn_three", data.OptionalLink0);
    formdata.append("way_of_more_to_learn_four", data.OptionalLink1);

    if (data.FounderType === "team") {
      formdata.append("co_founder_name_one", data.CoFounderOneName);
      formdata.append("co_founder_dob_one", data.CoFonderOneBirthDate);
      formdata.append("co_founder_gender_one", data.CoFounderOneGender);
      formdata.append("co_founder_email_one", data.CoFounderOneEmail);
      formdata.append("co_founder_mobile_one", data.CoFounderOneNumber);
    }

    formdata.append("co_founder_name_two", data.CoFounderTwoName);
    formdata.append("co_founder_dob_two", data.CoFonderTwoBirthDate);
    formdata.append("co_founder_gender_two", data.CoFounderTwoGender);
    formdata.append("co_founder_email_two", data.CoFounderTwoEmail);
    formdata.append("co_founder_mobile_two", data.CoFounderTwoNumber);

    formdata.append("pitch_deck", fileSizeTest);

    let requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
      headers: headers,
    };

    fetch(`${baseUrl}/sbdc/create`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          alert("Thanks For Your Application");
          setIsSubmitting(false);
          setIsDisabled(false);
          mainForm.reset();
        }
        if(data.success === false){
          alert("Please fill up all required fields!")
          setIsSubmitting(false);
          setIsDisabled(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const [isCheckedOne, setIsCheckedOne] = useState(false);
  const [isCheckedTwo, setIsCheckedTwo] = useState(false);
  // const [setIsUnderLaw] = useState(false);
  const [additionalLink, setAdditionalLink] = useState(0);
  const [additionalLinkArray, setArray] = useState([]);

  const addMoreLinks = (e) => {
    e.preventDefault();

    // setAdditionalLink((prev) => prev + 1);
    if (additionalLink === 2) {
      return;
    } else {
      setAdditionalLink((p) => p + 1);
      setArray([
        ...additionalLinkArray,
        <>
          <div className="row">
            <div className="col-lg-1">
              <h5>{"Link " + parseInt(3 + additionalLink)}</h5>
            </div>
            <div className="col-lg-6">
              <input type="text" {...register("OptionalLink" + additionalLink)} />
            </div>
            {/* <button onClick={deleteLink}>Delete</button> */}
          </div>
        </>,
      ]);
    }
  };

  const deleteLink = (e) => {
    e.preventDefault();
    setAdditionalLink((p) => p - 1);
    additionalLinkArray.pop();
    setArray([...additionalLinkArray]);
  };

  const handleCheckBoxOne = (e) => {
    setIsCheckedOne(true);
    setIsCheckedTwo(true);
  };

  const handleCheckBoxTwo = (e) => {
    setIsCheckedTwo(true);
    setIsCheckedOne(false);
  };

  return (
    <div className="sbdc-registration-input">
      <div className="form-input-header text-center mt-5">
        <p>
          *Please fill up this form to submit your idea if you are of{" "}
          <span className="bold">age 12 to 35.</span>
        </p>
      </div>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <form
            className="registration-main-form"
            onSubmit={handleSubmit(onSubmit)}
            id="sbdcInputForm"
          >
            <div className="row mt-5 register-focus d-flex align-items-center">
              <div className="col-lg-4">
                <h5>
                  Your Country <span className="red">*</span>
                </h5>
                <select className="form-select" {...register("ApplicantCountry")} required>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bermuda">Bermuda</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bonaire">Bonaire</option>
                  <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                  <option value="Botswana">Botswana</option>
                  <option value="Brazil">Brazil</option>
                  <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                  <option value="Brunei">Brunei</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Canary Islands">Canary Islands</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Cayman Islands">Cayman Islands</option>
                  <option value="Central African Republic">Central African Republic</option>
                  <option value="Chad">Chad</option>
                  <option value="Channel Islands">Channel Islands</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Christmas Island">Christmas Island</option>
                  <option value="Cocos Island">Cocos Island</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Cote DIvoire">Cote DIvoire</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Curaco">Curacao</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="East Timor">East Timor</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Falkland Islands">Falkland Islands</option>
                  <option value="Faroe Islands">Faroe Islands</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="French Guiana">French Guiana</option>
                  <option value="French Polynesia">French Polynesia</option>
                  <option value="French Southern Ter">French Southern Ter</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Gibraltar">Gibraltar</option>
                  <option value="Great Britain">Great Britain</option>
                  <option value="Greece">Greece</option>
                  <option value="Greenland">Greenland</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guadeloupe">Guadeloupe</option>
                  <option value="Guam">Guam</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="India">India</option>
                  <option value="Iran">Iran</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Isle of Man">Isle of Man</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Korea North">Korea North</option>
                  <option value="Korea Sout">Korea South</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Laos">Laos</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macau">Macau</option>
                  <option value="Macedonia">Macedonia</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Martinique">Martinique</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mayotte">Mayotte</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Midway Islands">Midway Islands</option>
                  <option value="Moldova">Moldova</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Nambia">Nambia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherland Antilles">Netherland Antilles</option>
                  <option value="Netherlands">Netherlands (Holland, Europe)</option>
                  <option value="Nevis">Nevis</option>
                  <option value="New Caledonia">New Caledonia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Niue">Niue</option>
                  <option value="Norfolk Island">Norfolk Island</option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau Island">Palau Island</option>
                  <option value="Palestine">Palestine</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Phillipines">Philippines</option>
                  <option value="Pitcairn Island">Pitcairn Island</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Republic of Montenegro">Republic of Montenegro</option>
                  <option value="Republic of Serbia">Republic of Serbia</option>
                  <option value="Reunion">Reunion</option>
                  <option value="Romania">Romania</option>
                  <option value="Russia">Russia</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="St Barthelemy">St Barthelemy</option>
                  <option value="St Eustatius">St Eustatius</option>
                  <option value="St Helena">St Helena</option>
                  <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                  <option value="St Lucia">St Lucia</option>
                  <option value="St Maarten">St Maarten</option>
                  <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                  <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                  <option value="Saipan">Saipan</option>
                  <option value="Samoa">Samoa</option>
                  <option value="Samoa American">Samoa American</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syria</option>
                  <option value="Tahiti">Tahiti</option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Togo">Togo</option>
                  <option value="Tokelau">Tokelau</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Erimates">United Arab Emirates</option>
                  <option selected value="United States of America">
                    United States of America
                  </option>
                  <option value="Uraguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Vatican City State">Vatican City State</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                  <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                  <option value="Wake Island">Wake Island</option>
                  <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zaire">Zaire</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
              </div>
              <div className="col-lg-2"></div>
              {/* <div className="col-lg-6">
                <h5 className="mt-5 white-space-no-wrap">Name of Your Institution <span className="red">*</span></h5>
                <input type="text" {...register("NameOfYourInstitution")} required />
              </div> */}
            </div>

            <div className="row">
              <div className="col-lg-6">
                <h5 className="mt-5 white-space-no-wrap">
                  Name of Social Business/Idea <span className="red">*</span>
                </h5>
                <input type="text" {...register("NameOfSocialBusiness")} required />
                {errors.NameOfSocialBusiness?.message && (
                  <span>{errors.NameOfSocialBusiness.message}</span>
                )}
              </div>
              <div className="col-lg-6">
                <h5 className="mt-5 white-space-no-wrap">
                  What is your vision for the Social Business/Idea? <span className="red">*</span>
                </h5>
                <input type="text" {...register("YourVision")} required />
                {errors.name && errors.name.type === "required" && (
                  <span>Please fill this field</span>
                )}
                {errors.name && errors.name.type === "maxLength" && (
                  <span>Please write between 10 words</span>
                )}
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-12">
                <h5>
                  Tell us a bit more about your initiative{" "}
                  <span className="bold">(100 words max)</span>
                  <span className="red">*</span>
                </h5>
                <textarea type="text" {...register("YourInitiative")} required></textarea>
              </div>
            </div>
            <div className="row mt-5 registration-radio-top">
              <div className="col-lg-4">
                <h5>
                  Are you are applying as an individual or a team? <span className="red">*</span>
                </h5>
              </div>
              <div className="col-lg-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="team"
                    {...register("FounderType")}
                    name="FounderType"
                    id="flexCheckDefault"
                    onChange={handleCheckBoxOne}
                    defaultChecked={false}
                    required
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Team
                  </label>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-check">
                  <input
                    name="FounderType"
                    className="form-check-input"
                    type="radio"
                    {...register("FounderType")}
                    value="individual"
                    id="flexCheckDefault"
                    onChange={handleCheckBoxTwo}
                    required
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Individual
                  </label>
                </div>
              </div>
            </div>
            <div className="row mt-5 registration-co-founder">
              <div className="col-lg-4">
                <h5>Founder(s) Information</h5>
                <p>*Your team may have more than two co-founders.</p>
              </div>
              {isCheckedOne && (
                <div className="col-lg-4 pe-5">
                  <h5>Co-Founder 1</h5>
                  <div>
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        required
                        {...register("CoFounderOneName")}
                      ></input>
                    </div>
                    <div>
                      <input
                        type="date"
                        placeholder="Date"
                        required
                        {...register("CoFonderOneBirthDate")}
                      ></input>
                    </div>
                    <div>
                      <select required {...register("CoFounderOneGender")}>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        {...register("CoFounderOneEmail")}
                      ></input>
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="Number"
                        required
                        {...register("CoFounderOneNumber")}
                      ></input>
                    </div>
                  </div>
                </div>
              )}
              {isCheckedTwo && (
                <div className="col-lg-4">
                  <h5>{isCheckedOne ? "Co-Founder 2" : "Founder"}</h5>
                  <div>
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        required
                        {...register("CoFounderTwoName")}
                      ></input>
                    </div>
                    <div>
                      <input
                        type="date"
                        placeholder="Date"
                        required
                        {...register("CoFonderTwoBirthDate")}
                      ></input>
                    </div>
                    <div>
                      <select required {...register("CoFounderTwoGender")}>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        {...register("CoFounderTwoEmail")}
                      ></input>
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="Number"
                        required
                        {...register("CoFounderTwoNumber")}
                      ></input>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* area of focus */}
            <div className="row mt-5 register-focus d-flex align-items-center">
              <div className="col-lg-4">
                <h5>
                  What is your Area of Focus? <span className="red">*</span>
                </h5>
              </div>
              <div className="col-lg-4">
                <select
                  required
                  {...register("AreaOfFocus")}
                  className="form-select"
                  onChange={handleAreaOfFocus}
                >
                  <option selected defaultValue="agriculture">
                    Agriculture
                  </option>
                  <option defaultValue="circulareconomy">Circular Economy</option>
                  <option defaultValue="employment">Employment</option>
                  <option defaultValue="environmentandclimatechange">
                    Environment and Climate Change
                  </option>
                  <option defaultValue="healthandwellbeing">Health and Well-being</option>
                  <option defaultValue="microcredit">Microcredit</option>
                  <option defaultValue="technologyandinnovation">Technology and Innovation</option>
                  <option defaultValue="tourism">Tourism</option>
                  <option defaultValue="sports">Sports</option>
                  <option defaultValue="wash">WASH</option>
                  <option defaultValue="waste">Waste</option>
                  <option defaultValue="others">Others</option>
                </select>
              </div>
              <div className="col-lg-4">
                {areaOfFocusChange === "Others" ? (
                  <div>
                    <label>If others, please specify:</label>
                    <input type="text" placeholder="" required {...register("OtherAreaOfFocus")} />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="mt-5">
              <h5>
                How is your Social Business reducing carbon emission, creating jobs or fighting
                poverty? <span className="bold"> Please tell us in 100 words.</span>
                <span className="red">*</span>
              </h5>
              <textarea required {...register("ReducingCarbonEmission")}></textarea>
            </div>
            <div className="mt-5">
              <h5>
                What innovation is your Social Business bringing to your market?{" "}
                <span className="red">*</span>
              </h5>
              <textarea required {...register("BringingToYourMarket")}></textarea>
            </div>
            <div className="mt-5">
              <h5>
                We respect and welcome both product and process innovation offered by enterprises{" "}
                <br /> and we would love to know more about your enterprise's innovation.{" "}
                <span className="bold">Write in 150 words.</span>
                <span className="red">*</span>
              </h5>
              <textarea required {...register("EnterpriseInnovation")}></textarea>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4">
                <h5>
                  At what stage is your venture? <span className="red">*</span>
                </h5>
              </div>
              <div className="col-lg-4">
                <select required {...register("StageOfVentures")} className="form-select">
                  <option selected defaultValue="ideastage">
                    Idea-stage
                  </option>
                  <option defaultValue="feasibility">Feasibility</option>
                  <option defaultValue="earlystage">Early-stage</option>
                </select>
              </div>
            </div>
            {/* <div className="row mt-5 registration-law">
                            <div className="col-lg-6">
                                <h5>
                                    Is the Social Business registered as an
                                    entity under the law?
                                </h5>
                            </div>
                            <div className="col-lg-2">
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value="yes"
                                        id="flexCheckDefault"
                                        {...register("UnderTheLaw")}
                                        onChange={handleUnderLawYes}
                                        defaultChecked={true}
                                    />
                                    <label
                                        class="form-check-label"
                                        for="flexCheckDefault"
                                    >
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value="no"
                                        id="flexCheckDefault"
                                        {...register("UnderTheLaw")}
                                        onChange={handleUnderLawNo}
                                    />
                                    <label
                                        class="form-check-label"
                                        for="flexCheckDefault"
                                    >
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                        {isUnderLaw && (
                            <div className="mt-5 registration-law-curve">
                                <input
                                    placeholder="If yes, please specify which law your Social Business is registered under."
                                    {...register("YesUnderTheLaw")}
                                ></input>
                            </div>
                        )} */}
            <div className="mt-5">
              {/* <p>
                                **Our program has primarily been designed for
                                the needs of Social Businesses; however,
                                non-profits, <br /> for-profits, co-operatives,
                                and community contribution businesses are all
                                eligible as long as they serve <br /> a crucial
                                social or environmental cause and are willing to
                                incorporate a Social Business model moving
                                forward.
                            </p> */}
            </div>
            <div className="mt-5 registration-law-curve">
              <h5>
                How does your Social Business plan to make money? <span className="red">*</span>
              </h5>
              <input required {...register("MakeMoney")}></input>
            </div>
            <div className="mt-5 link-input">
              <h5>
                Is there a way through which we can learn more about your Social Business/Idea?{" "}
                <br />
                <span className="bold">
                  (Website, News Article, Publication, Press Release, Interview)
                </span>
              </h5>
              <div className="mt-5">
                <div className="row">
                  <div className="col-lg-1">
                    <h5>Link 1</h5>
                  </div>
                  <div className="col-lg-6">
                    <input type="text" {...register("FirstLink")} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-1">
                    <h5>Link 2</h5>
                  </div>
                  <div className="col-lg-6">
                    <input type="text" {...register("SecondLink")} />
                  </div>
                </div>
                {additionalLinkArray}
              </div>
              <div className="mt-5 ">
                <button onClick={addMoreLinks}>+ Add more</button>
                {additionalLink > 0 ? (
                  <button className="ms-5" onClick={deleteLink}>
                    Delete
                  </button>
                ) : null}
              </div>
            </div>
            <div className="mt-5 file-upload">
              <div className="row">
                <div className="col-lg-3">
                  <h5>
                    Please upload your Pitch Deck<span className="red">*</span>
                  </h5>
                </div>
                <div className="col-lg-5">
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    {...register("UploadedFile")}
                    required
                    accept="application/msword, application/vnd.ms-excel, .doc, .docx, application/pdf,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.slideshow,application/vnd.openxmlformats-officedocument.presentationml.presentation, video/mp4,video/x-m4v, video/quicktime"
                    onChange={handleTestChange}
                  />
                </div>
                <div className="col-lg-3">
                  <div className="file-upload-condition">
                    <p>PPT - Pitch Deck (10 slides max)</p>
                    <p>PDF - Flyer (2 pages max)</p>
                    <p>DOC - 800 Words (max)</p>
                    <p>MOV/MP4 - 3 mins (max)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="registration-footer mt-2">
              <p>
                ***Submit an introduction to your team and Social Business idea. Mention the problem
                you aim to address and the proposed solution. <br /> Briefly highlight any relevant
                information regarding Beneficiaries, Value Proposition, Achievements, Financial
                forecasts etc.{" "}
              </p>
            </div>
            <div className="mt-5 text-center">
              <button type="submit" disabled={isDisabled}>
                {" "}
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};

export default SbdcInputs;
