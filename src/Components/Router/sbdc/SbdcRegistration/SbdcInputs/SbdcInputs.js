import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./SbdcInputs.scss";

const SbdcInputs = () => {
  const [areaOfFocusChange, setAreaOfFocusChange] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [pitchDeckFile, setPitchDeckFile] = useState(null);

  const [isCheckedOne, setIsCheckedOne] = useState(false);
  const [isCheckedTwo, setIsCheckedTwo] = useState(false);

  const [additionalLinkArray, setArray] = useState([]);
  const [additionalLink, setAdditionalLink] = useState(0);
  const [isUnderLaw, setIsUnderLaw] = useState(false);

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAreaOfFocus = (e) => {
    setAreaOfFocusChange(e.target.value);
  };

  const handleTestChange = (e) => {
    const file = e.target.files[0];
    const limit = 10 * 1024 * 1024; // 10MB

    if (!file) return;

    if (file.size > limit) {
      alert(
          `Please upload file under 10MB. Your file is ${Math.round(
              file.size / 1048576
          )}MB`
      );
      e.target.value = "";
      return;
    }

    setPitchDeckFile(file);
  };

  const handleCheckBoxOne = () => {
    setIsCheckedOne(true);
    setIsCheckedTwo(true);
  };

  const handleCheckBoxTwo = () => {
    setIsCheckedOne(false);
    setIsCheckedTwo(true);
  };

  const handleUnderLawYes = () => {
    setIsUnderLaw(true);
  };

  const handleUnderLawNo = () => {
    setIsUnderLaw(false);
  };

  const addMoreLinks = (e) => {
    e.preventDefault();

    if (additionalLink === 2) return;

    setAdditionalLink((p) => p + 1);

    setArray((prev) => [
      ...prev,
      <>
        <div className="row">
          <div className="col-lg-1">
            <h5>{"Link " + parseInt(3 + additionalLink)}</h5>
          </div>
          <div className="col-lg-6">
            <input type="text" {...register("OptionalLink" + additionalLink)} />
          </div>
        </div>
      </>,
    ]);
  };

  const deleteLink = (e) => {
    e.preventDefault();
    setAdditionalLink((p) => p - 1);
    setArray((prev) => prev.slice(0, -1));
  };

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      setIsDisabled(true);
      const founders = [];

      // Founder / Co-founder 1
      if (data.CoFounderOneName) {
        founders.push({
          name: data.CoFounderOneName,
          dob: data.CoFonderOneBirthDate,
          gender: data.CoFounderOneGender,
          email: data.CoFounderOneEmail,
          mobile: data.CoFounderOneNumber,
        });
      }

      // Founder / Co-founder 2
      if (data.CoFounderTwoName) {
        founders.push({
          name: data.CoFounderTwoName,
          dob: data.CoFonderTwoBirthDate,
          gender: data.CoFounderTwoGender,
          email: data.CoFounderTwoEmail,
          mobile: data.CoFounderTwoNumber,
        });
      }
      const formdata = new FormData();

      const payload = {
        name_of_business: data.NameOfSocialBusiness,
        application_type: data.FounderType, // team | individual
        stage_of_ventures: data.StageOfVentures,
        country: data.ApplicantCountry || null,

        sectors: data.AreaOfFocus ? [data.AreaOfFocus] : [],

        three_zero_contribution: data.SocialBusinessAdvance,
        innovation_details: data.UniqueInnovation,
        seven_principles: data.SevenPrinciple,
        revenue_model: data.RevenueStreams,
        impact_metrics: data.ProjectedImpact,

        is_registered: isUnderLaw === true ? 1 : 0,
        registration_law: data.YesUnderTheLaw || null,
        //
        // reference_links: [
        //   data.FirstLink,
        //   data.SecondLink,
        //   data.OptionalLink0,
        //   data.OptionalLink1,
        // ].filter(Boolean),

        grant_usage_plan: data.GrantUtilizationPlan,
        founders: founders
      };

      formdata.append("data", JSON.stringify(payload));
      if (pitchDeckFile) {
        formdata.append("pitch_deck", pitchDeckFile);
      }

      const response = await fetch(`${baseUrl}/sbdc/create`, {
        method: "POST",
        body: formdata,
      });

      const result = await response.json();

      if (result.success) {
        alert("Thanks For Your Application");
        reset();
        setPitchDeckFile(null);
        setIsCheckedOne(false);
        setIsCheckedTwo(false);
      } else {
        alert("Please fill up all required fields!");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setIsSubmitting(false);
      setIsDisabled(false);
    }
  };

  return (
    <div className="sbdc-registration-input">
      {/*<div className="form-input-header text-center mt-5">*/}
      {/*  <p>*/}
      {/*    *Please fill up this form to submit your idea if you are of{" "}*/}
      {/*    <span className="bold">age 12 to 35.</span>*/}
      {/*  </p>*/}
      {/*</div>*/}
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <form
            className="registration-main-form"
            onSubmit={handleSubmit(onSubmit)}
            id="sbdcInputForm"
          >
            {/*<div className="row mt-5 register-focus d-flex align-items-center">*/}
            {/*  <div className="col-lg-4">*/}
            {/*    <h5>*/}
            {/*      Your Country <span className="red">*</span>*/}
            {/*    </h5>*/}
            {/*    <select className="form-select" {...register("ApplicantCountry")} required>*/}
            {/*      <option value="Afghanistan">Afghanistan</option>*/}
            {/*      <option value="Albania">Albania</option>*/}
            {/*      <option value="Algeria">Algeria</option>*/}
            {/*      <option value="American Samoa">American Samoa</option>*/}
            {/*      <option value="Andorra">Andorra</option>*/}
            {/*      <option value="Angola">Angola</option>*/}
            {/*      <option value="Anguilla">Anguilla</option>*/}
            {/*      <option value="Antigua & Barbuda">Antigua & Barbuda</option>*/}
            {/*      <option value="Argentina">Argentina</option>*/}
            {/*      <option value="Armenia">Armenia</option>*/}
            {/*      <option value="Aruba">Aruba</option>*/}
            {/*      <option value="Australia">Australia</option>*/}
            {/*      <option value="Austria">Austria</option>*/}
            {/*      <option value="Azerbaijan">Azerbaijan</option>*/}
            {/*      <option value="Bahamas">Bahamas</option>*/}
            {/*      <option value="Bahrain">Bahrain</option>*/}
            {/*      <option value="Bangladesh">Bangladesh</option>*/}
            {/*      <option value="Barbados">Barbados</option>*/}
            {/*      <option value="Belarus">Belarus</option>*/}
            {/*      <option value="Belgium">Belgium</option>*/}
            {/*      <option value="Belize">Belize</option>*/}
            {/*      <option value="Benin">Benin</option>*/}
            {/*      <option value="Bermuda">Bermuda</option>*/}
            {/*      <option value="Bhutan">Bhutan</option>*/}
            {/*      <option value="Bolivia">Bolivia</option>*/}
            {/*      <option value="Bonaire">Bonaire</option>*/}
            {/*      <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>*/}
            {/*      <option value="Botswana">Botswana</option>*/}
            {/*      <option value="Brazil">Brazil</option>*/}
            {/*      <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>*/}
            {/*      <option value="Brunei">Brunei</option>*/}
            {/*      <option value="Bulgaria">Bulgaria</option>*/}
            {/*      <option value="Burkina Faso">Burkina Faso</option>*/}
            {/*      <option value="Burundi">Burundi</option>*/}
            {/*      <option value="Cambodia">Cambodia</option>*/}
            {/*      <option value="Cameroon">Cameroon</option>*/}
            {/*      <option value="Canada">Canada</option>*/}
            {/*      <option value="Canary Islands">Canary Islands</option>*/}
            {/*      <option value="Cape Verde">Cape Verde</option>*/}
            {/*      <option value="Cayman Islands">Cayman Islands</option>*/}
            {/*      <option value="Central African Republic">Central African Republic</option>*/}
            {/*      <option value="Chad">Chad</option>*/}
            {/*      <option value="Channel Islands">Channel Islands</option>*/}
            {/*      <option value="Chile">Chile</option>*/}
            {/*      <option value="China">China</option>*/}
            {/*      <option value="Christmas Island">Christmas Island</option>*/}
            {/*      <option value="Cocos Island">Cocos Island</option>*/}
            {/*      <option value="Colombia">Colombia</option>*/}
            {/*      <option value="Comoros">Comoros</option>*/}
            {/*      <option value="Congo">Congo</option>*/}
            {/*      <option value="Cook Islands">Cook Islands</option>*/}
            {/*      <option value="Costa Rica">Costa Rica</option>*/}
            {/*      <option value="Cote DIvoire">Cote DIvoire</option>*/}
            {/*      <option value="Croatia">Croatia</option>*/}
            {/*      <option value="Cuba">Cuba</option>*/}
            {/*      <option value="Curaco">Curacao</option>*/}
            {/*      <option value="Cyprus">Cyprus</option>*/}
            {/*      <option value="Czech Republic">Czech Republic</option>*/}
            {/*      <option value="Denmark">Denmark</option>*/}
            {/*      <option value="Djibouti">Djibouti</option>*/}
            {/*      <option value="Dominica">Dominica</option>*/}
            {/*      <option value="Dominican Republic">Dominican Republic</option>*/}
            {/*      <option value="East Timor">East Timor</option>*/}
            {/*      <option value="Ecuador">Ecuador</option>*/}
            {/*      <option value="Egypt">Egypt</option>*/}
            {/*      <option value="El Salvador">El Salvador</option>*/}
            {/*      <option value="Equatorial Guinea">Equatorial Guinea</option>*/}
            {/*      <option value="Eritrea">Eritrea</option>*/}
            {/*      <option value="Estonia">Estonia</option>*/}
            {/*      <option value="Ethiopia">Ethiopia</option>*/}
            {/*      <option value="Falkland Islands">Falkland Islands</option>*/}
            {/*      <option value="Faroe Islands">Faroe Islands</option>*/}
            {/*      <option value="Fiji">Fiji</option>*/}
            {/*      <option value="Finland">Finland</option>*/}
            {/*      <option value="France">France</option>*/}
            {/*      <option value="French Guiana">French Guiana</option>*/}
            {/*      <option value="French Polynesia">French Polynesia</option>*/}
            {/*      <option value="French Southern Ter">French Southern Ter</option>*/}
            {/*      <option value="Gabon">Gabon</option>*/}
            {/*      <option value="Gambia">Gambia</option>*/}
            {/*      <option value="Georgia">Georgia</option>*/}
            {/*      <option value="Germany">Germany</option>*/}
            {/*      <option value="Ghana">Ghana</option>*/}
            {/*      <option value="Gibraltar">Gibraltar</option>*/}
            {/*      <option value="Great Britain">Great Britain</option>*/}
            {/*      <option value="Greece">Greece</option>*/}
            {/*      <option value="Greenland">Greenland</option>*/}
            {/*      <option value="Grenada">Grenada</option>*/}
            {/*      <option value="Guadeloupe">Guadeloupe</option>*/}
            {/*      <option value="Guam">Guam</option>*/}
            {/*      <option value="Guatemala">Guatemala</option>*/}
            {/*      <option value="Guinea">Guinea</option>*/}
            {/*      <option value="Guyana">Guyana</option>*/}
            {/*      <option value="Haiti">Haiti</option>*/}
            {/*      <option value="Hawaii">Hawaii</option>*/}
            {/*      <option value="Honduras">Honduras</option>*/}
            {/*      <option value="Hong Kong">Hong Kong</option>*/}
            {/*      <option value="Hungary">Hungary</option>*/}
            {/*      <option value="Iceland">Iceland</option>*/}
            {/*      <option value="Indonesia">Indonesia</option>*/}
            {/*      <option value="India">India</option>*/}
            {/*      <option value="Iran">Iran</option>*/}
            {/*      <option value="Iraq">Iraq</option>*/}
            {/*      <option value="Ireland">Ireland</option>*/}
            {/*      <option value="Isle of Man">Isle of Man</option>*/}
            {/*      <option value="Israel">Israel</option>*/}
            {/*      <option value="Italy">Italy</option>*/}
            {/*      <option value="Jamaica">Jamaica</option>*/}
            {/*      <option value="Japan">Japan</option>*/}
            {/*      <option value="Jordan">Jordan</option>*/}
            {/*      <option value="Kazakhstan">Kazakhstan</option>*/}
            {/*      <option value="Kenya">Kenya</option>*/}
            {/*      <option value="Kiribati">Kiribati</option>*/}
            {/*      <option value="Korea North">Korea North</option>*/}
            {/*      <option value="Korea Sout">Korea South</option>*/}
            {/*      <option value="Kuwait">Kuwait</option>*/}
            {/*      <option value="Kyrgyzstan">Kyrgyzstan</option>*/}
            {/*      <option value="Laos">Laos</option>*/}
            {/*      <option value="Latvia">Latvia</option>*/}
            {/*      <option value="Lebanon">Lebanon</option>*/}
            {/*      <option value="Lesotho">Lesotho</option>*/}
            {/*      <option value="Liberia">Liberia</option>*/}
            {/*      <option value="Libya">Libya</option>*/}
            {/*      <option value="Liechtenstein">Liechtenstein</option>*/}
            {/*      <option value="Lithuania">Lithuania</option>*/}
            {/*      <option value="Luxembourg">Luxembourg</option>*/}
            {/*      <option value="Macau">Macau</option>*/}
            {/*      <option value="Macedonia">Macedonia</option>*/}
            {/*      <option value="Madagascar">Madagascar</option>*/}
            {/*      <option value="Malaysia">Malaysia</option>*/}
            {/*      <option value="Malawi">Malawi</option>*/}
            {/*      <option value="Maldives">Maldives</option>*/}
            {/*      <option value="Mali">Mali</option>*/}
            {/*      <option value="Malta">Malta</option>*/}
            {/*      <option value="Marshall Islands">Marshall Islands</option>*/}
            {/*      <option value="Martinique">Martinique</option>*/}
            {/*      <option value="Mauritania">Mauritania</option>*/}
            {/*      <option value="Mauritius">Mauritius</option>*/}
            {/*      <option value="Mayotte">Mayotte</option>*/}
            {/*      <option value="Mexico">Mexico</option>*/}
            {/*      <option value="Midway Islands">Midway Islands</option>*/}
            {/*      <option value="Moldova">Moldova</option>*/}
            {/*      <option value="Monaco">Monaco</option>*/}
            {/*      <option value="Mongolia">Mongolia</option>*/}
            {/*      <option value="Montserrat">Montserrat</option>*/}
            {/*      <option value="Morocco">Morocco</option>*/}
            {/*      <option value="Mozambique">Mozambique</option>*/}
            {/*      <option value="Myanmar">Myanmar</option>*/}
            {/*      <option value="Nambia">Nambia</option>*/}
            {/*      <option value="Nauru">Nauru</option>*/}
            {/*      <option value="Nepal">Nepal</option>*/}
            {/*      <option value="Netherland Antilles">Netherland Antilles</option>*/}
            {/*      <option value="Netherlands">Netherlands (Holland, Europe)</option>*/}
            {/*      <option value="Nevis">Nevis</option>*/}
            {/*      <option value="New Caledonia">New Caledonia</option>*/}
            {/*      <option value="New Zealand">New Zealand</option>*/}
            {/*      <option value="Nicaragua">Nicaragua</option>*/}
            {/*      <option value="Niger">Niger</option>*/}
            {/*      <option value="Nigeria">Nigeria</option>*/}
            {/*      <option value="Niue">Niue</option>*/}
            {/*      <option value="Norfolk Island">Norfolk Island</option>*/}
            {/*      <option value="Norway">Norway</option>*/}
            {/*      <option value="Oman">Oman</option>*/}
            {/*      <option value="Pakistan">Pakistan</option>*/}
            {/*      <option value="Palau Island">Palau Island</option>*/}
            {/*      <option value="Palestine">Palestine</option>*/}
            {/*      <option value="Panama">Panama</option>*/}
            {/*      <option value="Papua New Guinea">Papua New Guinea</option>*/}
            {/*      <option value="Paraguay">Paraguay</option>*/}
            {/*      <option value="Peru">Peru</option>*/}
            {/*      <option value="Phillipines">Philippines</option>*/}
            {/*      <option value="Pitcairn Island">Pitcairn Island</option>*/}
            {/*      <option value="Poland">Poland</option>*/}
            {/*      <option value="Portugal">Portugal</option>*/}
            {/*      <option value="Puerto Rico">Puerto Rico</option>*/}
            {/*      <option value="Qatar">Qatar</option>*/}
            {/*      <option value="Republic of Montenegro">Republic of Montenegro</option>*/}
            {/*      <option value="Republic of Serbia">Republic of Serbia</option>*/}
            {/*      <option value="Reunion">Reunion</option>*/}
            {/*      <option value="Romania">Romania</option>*/}
            {/*      <option value="Russia">Russia</option>*/}
            {/*      <option value="Rwanda">Rwanda</option>*/}
            {/*      <option value="St Barthelemy">St Barthelemy</option>*/}
            {/*      <option value="St Eustatius">St Eustatius</option>*/}
            {/*      <option value="St Helena">St Helena</option>*/}
            {/*      <option value="St Kitts-Nevis">St Kitts-Nevis</option>*/}
            {/*      <option value="St Lucia">St Lucia</option>*/}
            {/*      <option value="St Maarten">St Maarten</option>*/}
            {/*      <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>*/}
            {/*      <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>*/}
            {/*      <option value="Saipan">Saipan</option>*/}
            {/*      <option value="Samoa">Samoa</option>*/}
            {/*      <option value="Samoa American">Samoa American</option>*/}
            {/*      <option value="San Marino">San Marino</option>*/}
            {/*      <option value="Sao Tome & Principe">Sao Tome & Principe</option>*/}
            {/*      <option value="Saudi Arabia">Saudi Arabia</option>*/}
            {/*      <option value="Senegal">Senegal</option>*/}
            {/*      <option value="Seychelles">Seychelles</option>*/}
            {/*      <option value="Sierra Leone">Sierra Leone</option>*/}
            {/*      <option value="Singapore">Singapore</option>*/}
            {/*      <option value="Slovakia">Slovakia</option>*/}
            {/*      <option value="Slovenia">Slovenia</option>*/}
            {/*      <option value="Solomon Islands">Solomon Islands</option>*/}
            {/*      <option value="Somalia">Somalia</option>*/}
            {/*      <option value="South Africa">South Africa</option>*/}
            {/*      <option value="Spain">Spain</option>*/}
            {/*      <option value="Sri Lanka">Sri Lanka</option>*/}
            {/*      <option value="Sudan">Sudan</option>*/}
            {/*      <option value="Suriname">Suriname</option>*/}
            {/*      <option value="Swaziland">Swaziland</option>*/}
            {/*      <option value="Sweden">Sweden</option>*/}
            {/*      <option value="Switzerland">Switzerland</option>*/}
            {/*      <option value="Syria">Syria</option>*/}
            {/*      <option value="Tahiti">Tahiti</option>*/}
            {/*      <option value="Taiwan">Taiwan</option>*/}
            {/*      <option value="Tajikistan">Tajikistan</option>*/}
            {/*      <option value="Tanzania">Tanzania</option>*/}
            {/*      <option value="Thailand">Thailand</option>*/}
            {/*      <option value="Togo">Togo</option>*/}
            {/*      <option value="Tokelau">Tokelau</option>*/}
            {/*      <option value="Tonga">Tonga</option>*/}
            {/*      <option value="Trinidad & Tobago">Trinidad & Tobago</option>*/}
            {/*      <option value="Tunisia">Tunisia</option>*/}
            {/*      <option value="Turkey">Turkey</option>*/}
            {/*      <option value="Turkmenistan">Turkmenistan</option>*/}
            {/*      <option value="Turks & Caicos Is">Turks & Caicos Is</option>*/}
            {/*      <option value="Tuvalu">Tuvalu</option>*/}
            {/*      <option value="Uganda">Uganda</option>*/}
            {/*      <option value="United Kingdom">United Kingdom</option>*/}
            {/*      <option value="Ukraine">Ukraine</option>*/}
            {/*      <option value="United Arab Erimates">United Arab Emirates</option>*/}
            {/*      <option selected value="United States of America">*/}
            {/*        United States of America*/}
            {/*      </option>*/}
            {/*      <option value="Uraguay">Uruguay</option>*/}
            {/*      <option value="Uzbekistan">Uzbekistan</option>*/}
            {/*      <option value="Vanuatu">Vanuatu</option>*/}
            {/*      <option value="Vatican City State">Vatican City State</option>*/}
            {/*      <option value="Venezuela">Venezuela</option>*/}
            {/*      <option value="Vietnam">Vietnam</option>*/}
            {/*      <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>*/}
            {/*      <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>*/}
            {/*      <option value="Wake Island">Wake Island</option>*/}
            {/*      <option value="Wallis & Futana Is">Wallis & Futana Is</option>*/}
            {/*      <option value="Yemen">Yemen</option>*/}
            {/*      <option value="Zaire">Zaire</option>*/}
            {/*      <option value="Zambia">Zambia</option>*/}
            {/*      <option value="Zimbabwe">Zimbabwe</option>*/}
            {/*    </select>*/}
            {/*  </div>*/}
            {/*  <div className="col-lg-2"></div>*/}
            {/*  /!* <div className="col-lg-6">*/}
            {/*    <h5 className="mt-5 white-space-no-wrap">Name of Your Institution <span className="red">*</span></h5>*/}
            {/*    <input type="text" {...register("NameOfYourInstitution")} required />*/}
            {/*  </div> *!/*/}
            {/*</div>*/}

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
              {/*<div className="col-lg-6">*/}
              {/*  <h5 className="mt-5 white-space-no-wrap">*/}
              {/*    What is your vision for the Social Business/Idea? <span className="red">*</span>*/}
              {/*  </h5>*/}
              {/*  <input type="text" {...register("YourVision")} required />*/}
              {/*  {errors.name && errors.name.type === "required" && (*/}
              {/*    <span>Please fill this field</span>*/}
              {/*  )}*/}
              {/*  {errors.name && errors.name.type === "maxLength" && (*/}
              {/*    <span>Please write between 10 words</span>*/}
              {/*  )}*/}
              {/*</div>*/}
            </div>
            {/*<div className="row mt-5">*/}
            {/*  <div className="col-lg-12">*/}
            {/*    <h5>*/}
            {/*      Tell us a bit more about your initiative{" "}*/}
            {/*      <span className="bold">(100 words max)</span>*/}
            {/*      <span className="red">*</span>*/}
            {/*    </h5>*/}
            {/*    <textarea type="text" {...register("YourInitiative")} required></textarea>*/}
            {/*  </div>*/}
            {/*</div>*/}
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
                  In which sector(s) are you currently working or targeting <span className="red">*</span>
                </h5>
              </div>
              <div className="col-lg-4">
                <select
                  required
                  {...register("AreaOfFocus")}
                  className="form-select"
                  onChange={handleAreaOfFocus}
                >
                  <option>Select sector</option>
                  <option defaultValue="zerounemployment">
                    Zero unemployment if the business creates jobs, skills, or entrepreneurship.
                  </option>
                  <option defaultValue="zeropoverty">Zero poverty if it improves income, access, or livelihoods.</option>
                  <option defaultValue="zeronetcarbon">Zero net carbon emissions if it reduces waste, energy use, emissions, or promotes sustainability.</option>
                </select>
              </div>
              {/*<div className="col-lg-4">*/}
              {/*  {areaOfFocusChange === "Others" ? (*/}
              {/*    <div>*/}
              {/*      <label>If others, please specify:</label>*/}
              {/*      <input type="text" placeholder="" required {...register("OtherAreaOfFocus")} />*/}
              {/*    </div>*/}
              {/*  ) : (*/}
              {/*    ""*/}
              {/*  )}*/}
              {/*</div>*/}
            </div>
            <div className="row mt-5">
              <div className="col-lg-4">
                <h5>
                  At what stage is your venture? <span className="red">*</span>
                </h5>
              </div>
              <div className="col-lg-4">
                <select required {...register("StageOfVentures")} className="form-select">
                  <option>Select stage</option>
                  <option defaultValue="ideaconcept">
                    Ideation/Concept
                  </option>
                  <option defaultValue="prototype">Prototype/MVP Pilot/Testing</option>
                  <option defaultValue="earlyoperations">Early Operations</option>
                  <option defaultValue="scaledImplementation">Scaled Implementation</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <h5>
                How does your social business advance a World of Three Zeros? <span className="bold">(150 words or less)</span>
                <span className="red">*</span>
              </h5>
              <textarea required {...register("SocialBusinessAdvance")}></textarea>
            </div>
            <div className="mt-5">
              <h5>
                What unique innovation (product, process, model, or technology) does your social business bring to the market? We welcome both product and process innovations. {" "}
                <span className="bold">(150 words or less)</span>
                <span className="red">*</span>
              </h5>
              <textarea required {...register("UniqueInnovation")}></textarea>
            </div>
            <div className="mt-5">
              <h5>
                Confirm how your idea follows the Seven Principles (e.g., poverty/environment focus, no profit maximization beyond investment recovery, reinvestment of profits, gender sensitivity, joyful work). Provide examples. {" "}
                <span className="bold">(150 words or less)</span>
                <span className="red">*</span>
              </h5>
              <textarea required {...register("SevenPrinciple")}></textarea>
            </div>
            <div className="mt-5">
              <h5>
                Explain your revenue streams and path to financial sustainability (e.g., sales, fees, partnerships). How will profits be reinvested per social business principles? {" "}
                <span className="bold">(150 words or less)</span>
                <span className="red">*</span>
              </h5>
              <textarea required {...register("RevenueStreams")}></textarea>
            </div>
            <div className="mt-5">
              <h5>
                Quantify your projected impact: How will your business reduce carbon emissions, create jobs, or fight poverty? Include metrics and calculation. {" "}
                <span className="bold">(150 words or less)</span>
                <span className="red">*</span>
              </h5>
              <textarea required {...register("ProjectedImpact")}></textarea>
            </div>
            <div className="row mt-5 registration-law">
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
            )}

            <div className="mt-5">
              <h5>
                Is there a way through which we can learn more about your Social Business/Idea? (Website, News Article, Publication, Press Release, Interview) {" "}
                <span className="red">*</span>
              </h5>
              <textarea required {...register("WayToLearnMore")}></textarea>
            </div>

            <div className="mt-5">
              <h5>
                If selected as the winner, how do you plan to utilize the USD 10,000 grant to implement your Social Business? {" "}
                <i>Please describe how the funds will be used to develop, test, or launch your business (e.g., prototyping, pilot implementation, operations, technology, team, etc.), including key milestones and expected outcomes.</i>
                <span className="red">*</span>
              </h5>
              <textarea required {...register("GrantUtilizationPlan")}></textarea>
            </div>
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
            {/*<div className="mt-5 registration-law-curve">*/}
            {/*  <h5>*/}
            {/*    How does your Social Business plan to make money? <span className="red">*</span>*/}
            {/*  </h5>*/}
            {/*  <input required {...register("MakeMoney")}></input>*/}
            {/*</div>*/}
            {/*<div className="mt-5 link-input">*/}
            {/*  <h5>*/}
            {/*    Is there a way through which we can learn more about your Social Business/Idea?{" "}*/}
            {/*    <br />*/}
            {/*    <span className="bold">*/}
            {/*      (Website, News Article, Publication, Press Release, Interview)*/}
            {/*    </span>*/}
            {/*  </h5>*/}
            {/*  <div className="mt-5">*/}
            {/*    <div className="row">*/}
            {/*      <div className="col-lg-1">*/}
            {/*        <h5>Link 1</h5>*/}
            {/*      </div>*/}
            {/*      <div className="col-lg-6">*/}
            {/*        <input type="text" {...register("FirstLink")} />*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    <div className="row">*/}
            {/*      <div className="col-lg-1">*/}
            {/*        <h5>Link 2</h5>*/}
            {/*      </div>*/}
            {/*      <div className="col-lg-6">*/}
            {/*        <input type="text" {...register("SecondLink")} />*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    {additionalLinkArray}*/}
            {/*  </div>*/}
            {/*  <div className="mt-5 ">*/}
            {/*    <button onClick={addMoreLinks}>+ Add more</button>*/}
            {/*    {additionalLink > 0 ? (*/}
            {/*      <button className="ms-5" onClick={deleteLink}>*/}
            {/*        Delete*/}
            {/*      </button>*/}
            {/*    ) : null}*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className="mt-5 file-upload">
              <div className="row">
                <div className="col-lg-7">
                  <h5>
                    Please upload your Pitch Deck.
                    <span> Make sure to include slides on <i className="bold">What the business is about; The problem it is solving; The proposed solution; Revenue model; Financial sustainability approach; Expected social impact.</i></span>
                    <span className="red">*</span>
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
                {/*<div className="col-lg-3">*/}
                {/*  <div className="file-upload-condition">*/}
                {/*    <p>PPT - Pitch Deck (10 slides max)</p>*/}
                {/*    <p>PDF - Flyer (2 pages max)</p>*/}
                {/*    <p>DOC - 800 Words (max)</p>*/}
                {/*    <p>MOV/MP4 - 3 mins (max)</p>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
            </div>
            {/*<div className="registration-footer mt-2">*/}
            {/*  <p>*/}
            {/*    ***Submit an introduction to your team and Social Business idea. Mention the problem*/}
            {/*    you aim to address and the proposed solution. <br /> Briefly highlight any relevant*/}
            {/*    information regarding Beneficiaries, Value Proposition, Achievements, Financial*/}
            {/*    forecasts etc.{" "}*/}
            {/*  </p>*/}
            {/*</div>*/}
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
