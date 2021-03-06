import React, { useState } from 'react';

const ProfileInputs = () => {
    const [fileFormat, setfileFormat] = useState("writing");

    const [fileAcceptStr, setFileAcceptStr] = useState(
      "audio/*, video/mp4,video/x-m4v, video/quicktime"
    );
  
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
  
    const [showFileUpload, setShowFileUpload] = useState(true);
    const [fileSizeTest, setFileSizeTest] = useState([]);
    
    // Base Url
    const baseUrl = process.env.REACT_APP_BASE_URL;
  
    const formatString = {
      rhetoric:
        "Format: .mp3, .mp4, or .avi",
      animation:
        "Format: .mp4 and .mov",
      poster_presentation:
        "Format: .pdf, .jpeg, .jpg and, .png",
      writing:
        "Format: .docx or .pdf",
      illustration:
        "Format: .jpeg, jpg and .png",
      cinematography:
        "Format: .mp4 and .mov",
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
      setDraftCategory(e.target.value)
  
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
      
      let files = e.target.files
      let getLimit = 2097152
      for(let j = 0; j < files.length; j++){
        if(files[j].size > getLimit){
          alert(`Please upload your file between 2MB, your file is ${Math.round(files[j].size / 1048576)}MB`)
          e.target.value = ''
        }
        else{
          setFileSizeTest(files)
        }
      }
    };  
  
    // new state
    const [draftName, setDraftName] = useState('') 
    const [draftInstitution, setDraftInstitution] = useState('') 
    const [draftValidPhoneNumber, setDraftValidPhoneNumber] = useState('')
    const [draftValidEmail, setDraftValidEmail] = useState('')
    const [draftDOB, setDraftDOB] = useState('')
    const [draftCountry, setDraftCountry] = useState('')
    const [draftGender, setDraftGender] = useState('')
    const [draftAreaOfFocusChange, setDraftAreaOfFocusChange] = useState('');
    const [draftOtherSocialProblem, setDraftOtherSocialProblem] = useState('')
    const [draftYourSocialProblem, setDraftYourSocialProblem] = useState('')
    const [draftSocialFictionUnique, setDraftSocialFictionUnique] = useState('')
    const [draftSolutionImpact, setDraftSolutionImpact] = useState('')
    const [draftURL, setDraftURL] = useState('')
    const [draftCategory, setDraftCategory] = useState('')
  
  
    const HandleOtherSocialProblem = e => {
      setDraftOtherSocialProblem(e.target.value)
    }
  
    const handleName = e => {
      if(e.target.value === ''){
        alert('Name is required!')
      }else{
        setDraftName('farhan')
      }
    }
  
    const handleInstitution = e => {
      if(e.target.value === ''){
        alert('Institute is required!')
      }else{
        setDraftInstitution(e.target.value)
      }
    }
  
    const handleValidEmail = e => {
      let emailFilter = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
      if(emailFilter.test(e.target.value) && e.target.value !== ''){
        setDraftValidEmail(e.target.value)
      }
      else{
        alert('Invalid Email!')
      }
    }
  
    const HandleValidPhoneNumber = e =>{
      let phoneNumber = e.target.value;
      if (isNaN(phoneNumber) || Number(phoneNumber) < 0) {
        alert("Please Input a Valid number!")
      } else {
        setDraftValidPhoneNumber(phoneNumber)
      }
    }
  
    const handleDOB = e => {
      if(e.target.value === ''){
        alert('Date of Birth is required!')
      }else{
        setDraftDOB(e.target.value)
      }
    }
  
    const handleCountry = e => {
      setDraftCountry(e.target.value)
    }
  
    const handleGender = e => {
      setDraftGender(e.target.value)
    }
  
    const handleAreaOfFocus = e => {
      e.preventDefault();
      let areaOfFocusValue = e.target.value;
      setDraftAreaOfFocusChange(areaOfFocusValue)
    };
  
    const handleYourSocialProblem = e => {
      if(e.target.value.split(" ").length - 1 > 299){
        alert('Please Describe in 300 words')
      }else{
        setDraftYourSocialProblem(e.target.value)
      }
    }
  
    const handleFictionUnique = e => {
      if(e.target.value.split(" ").length - 1 > 99){
        alert('Please Describe in 100 words')
      }else{
        setDraftSocialFictionUnique(e.target.value)
      }
    }
  
    const handleSolutionImpact = e => {
      if(e.target.value.split(" ").length - 1 > 199){
        alert('Please Describe in 200 words')
      }else{
        setDraftSolutionImpact(e.target.value)
      }
    }
  
    const handleURL = e => {
      setDraftURL(e.target.value)
    }

    const handleSubmit = e => {
      e.preventDefault()
      
      // submit data
      let headers = new Headers();
      let formdata = new FormData();

      setIsSubmitting(true);
      setIsDisabled(true);

      formdata.append("name_of_applicant", draftName);
      formdata.append("name_of_institution", draftInstitution);
      formdata.append("phone", draftValidPhoneNumber);
      formdata.append("email", draftValidEmail);
      formdata.append("date_of_birth", draftDOB);
      formdata.append("gender", draftGender);
      formdata.append("country", draftCountry);
      formdata.append("area_of_focus", draftAreaOfFocusChange)
      formdata.append("social_problems", draftYourSocialProblem)
      formdata.append("other_social_problem", draftOtherSocialProblem === ''? 'null' : draftOtherSocialProblem)
      formdata.append("unique_solutions", draftSocialFictionUnique)
      formdata.append("impact_of_fictional_solution", draftSolutionImpact)
      formdata.append("type_of_content", draftCategory)
      formdata.append("submission_type", 'submission')      

      let letters = ["rhetoric", "animation", "cinematography"];
      let result = letters.includes(draftCategory);

      let getFiles;

      if (result) {
        formdata.append(`file_of_idea`, draftURL);
      } else {
        for (let i = 0; i < fileSizeTest.length; i++) {
          getFiles = fileSizeTest[i];
          formdata.append(`file_of_idea[${i}]`, getFiles);
        }
      }

      let requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
        headers: headers,
      }

      fetch(`${baseUrl}/sfdc/create`, requestOptions)
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              alert("Thank you for the application!");
              setIsSubmitting(false);
              setIsDisabled(false);
              mainForm.reset();
              setDraftOtherSocialProblem('')
            }
            if(data.success === false){
              setIsSubmitting(false);
              setIsDisabled(false);
            }
          })
          .catch((error) => {
            console.error(error);
          });
    }
  
    return (
      <div className="sfdc-registration-input">
        <div className="form-input-header text-center mt-5">
          {/* <p>
                      *Please fill up this form to submit your idea if you are of{" "}
                      <span className="bold">age 12 to 35.</span>
                  </p> */}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form
              encType="multipart/form-data"
              className="registration-main-form"
              onSubmit={handleSubmit}
              id="sfdcInputForm"
            >
              <div className="row">
                <div className="mt-5 col-lg-6">
                  <h5>
                    Name of Applicant <span className="red">*</span>
                  </h5>
                  <input
                    type="text"
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
                    onChange={handleInstitution}
                    required
                    />
                    
                </div>
              </div>
              <div className="row ">
                <div className="mt-5 col-lg-6">
                  <h5>
                    Date of Birth of Applicant <span className="red">*</span>
                  </h5>
                  <input type="date" onChange={handleDOB} required/>
                 
                </div>
                <div className="mt-5 col-lg-6">
                  <h5>
                    Country <span className="red">*</span>
                  </h5>
                  <select className="form-select" onChange={handleCountry} required>
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
              </div>
              <div className="row ">
                <div className="mt-5 col-lg-6">
                  <h5>
                    E-mail <span className="red">*</span>
                  </h5>
                  <input type="email" onBlur={handleValidEmail} required/>
                </div>
                <div className="mt-5 col-lg-6">
                  <h5>
                    Phone <span className="red">*</span>
                  </h5>
                  <input type="text" onChange={HandleValidPhoneNumber} required/>
                </div>
              </div>
              <div className="row register-gender">
                <div className="mt-5 col-lg-6 pb-5">
                  <h5>
                    Gender <span className="red">*</span>
                  </h5>
                  <select onChange={handleGender} className="form-select mt-3">
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                  </select>
                </div>
              </div>
              <div className="extra-title mt-5">
                <p>Imagine the life of a young person in the world of 2050.</p>
                <p>Visualise how this fictional world of the future is different from the world we live in now.</p>
              </div>
              {/* area of focus */}
              <div className="row mt-3 register-focus d-flex align-items-center">
                <div className="col-lg-4">
                  {/* <h5>What social problem are you addressing?</h5> */}
                  <h5>
                  What key social or environmental issues does this fictional world address? <span className="red">*</span>
                  </h5>
                </div>
                <div className="col-lg-4">
                  <select
                    className="form-select"
                    onChange={handleAreaOfFocus}
                    required
                  >
                    <option value="circulareconomy">Circular Economy</option>
                    <option value="agriculture" selected>
                      Agriculture
                    </option>
                    <option value="employment">Employment</option>
                    <option value="environmentandclimatechange">
                      Environment and Climate Change
                    </option>
                    <option value="healthandwellbeing">Health and Well-being</option>
                    <option value="microcredit">Microcredit</option>
                    <option value="technologyandinnovation">Technology and Innovation</option>
                    <option value="tourism">Tourism</option>
                    <option value="sports">Sports</option>
                    <option value="wash">WASH</option>
                    <option value="waste">Waste</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div className="col-lg-4">
                  {draftAreaOfFocusChange === "others" ? (
                    <div>
                      <label>If others, please specify:</label>
                      <input type="text" onChange={HandleOtherSocialProblem} value={draftOtherSocialProblem} required/>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-12 mt-5">
                  <h5>
                  Tell us a bit about the fictional world you have designed for the year 2050.{" "}
                    <span className="bold">300 words (max)</span>
                    <span className="red">*</span>
                  </h5>
                  <div className="extra-title">
                    <p>What does this world look like? .</p>
                    <p>What makes it different from the world we live in now? </p>
                    <p>What are some of the innovations and advancements made? </p>
                    <p>Who are the key players in this fictional world?</p>
                  </div>
                  <textarea
                    type="text"
                    onBlur={handleYourSocialProblem}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-12 mt-5">
                  <h5>
                  What makes your Social Fiction unique?  <span className="red">*</span> <span className="bold">100 words (max)</span>
                  </h5>
                  <textarea onChange={handleFictionUnique} required></textarea>
                </div>
              </div>
              <div className="mt-5">
                <div className="col-lg-12 pt-5">
                  <h5>
                  What impact would your fictional world have on the environment, economy and/or communities? <span className="red">*</span> <span className="bold">200 words (max)</span>
                  </h5>
                  <textarea onChange={handleSolutionImpact} required></textarea>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-4 mt-5">
                  <h5 className="extra-headline">
                  <span className="extra-headline-bold">Visualise</span> and <span className="extra-headline-bold">design</span> this fictional world for young people in the year 2050. <span className="extra-headline-bold">Upload</span> this social fiction in any of the creative categories. <span className="red">*</span>
                  </h5>
                </div>
                <div className="col-lg-4 mt-5">
                  <select
                    className="form-select"
                    onChange={handleChange}
                    required
                  >
                    <option selected value="writing">
                      Writing
                    </option>
                    <option value="rhetoric">Rhetoric</option>
                    <option value="poster_presentation">Poster Presentation</option>
                    <option value="animation">Animation</option>
                    <option value="illustration">Illustration</option>
                    <option value="cinematography">Cinematography</option>
                  </select>
                </div>
                <div className="col-lg-4 mt-5">
                  {showFileUpload && (
                    <div className="file-upload">
                      <div>
                        <input
                          className="form-control"
                          type="file"
                          id="formFile"
                          accept={formatAccept[fileAcceptStr]}
                          multiple
                          onChange={handleTestChange}
                          required
                        />
                      </div>
                      <div className="col-lg-3">
                        <div className="file-upload-condition"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {showFileUpload && <p className="mt-5 text-center">{formatString[fileFormat]}</p>}
  
              {!showFileUpload && (
                <div className="row mt-5 file-link-notification">
                  <h5>
                    Upload your file to a cloud drive (we recommend google drive), then share the link
                    with us <span className="red">*</span>
                  </h5>
                  <input className="form-control" type="url" onBlur={handleURL}/>
                </div>
              )}
              <div className="mt-5 text-center submit-button">
                <button type="submit" disabled={isDisabled} className="mx-1">
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default ProfileInputs;