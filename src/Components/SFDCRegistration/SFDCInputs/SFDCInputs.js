import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./SFDCInputs.scss";

const SFDCInputs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [fileFormat, setfileFormat] = useState("writing");

    const onSubmit = (data) => {
        let headers = new Headers();

        var imagedata = document.querySelector('input[type="file"]').files[0];
        
        let formdata = new FormData();
        formdata.append("name_of_applicant", data.NameOfApplicant);
        formdata.append("name_of_institution", data.NameOfInstitution);
        formdata.append("date_of_birth", data.ApplicantDateOfBirth);
        formdata.append("email", data.ApplicantEmail);
        formdata.append("phone", data.ApplicantPhone);
        formdata.append("social_problems", data.YourSocialProblem);
        formdata.append("other_social_problem", data.OtherSocialProblem);
        formdata.append("more_about_social_problem", data.YourSocialProblem);

        formdata.append("unique_solutions", data.WhatMakesItUnique);
        formdata.append("impact_of_fictional_solution", data.SolutionImpact);
        formdata.append("type_of_content", data.CreativeCategory);
        formdata.append("file_of_idea", imagedata);
        
        let requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
            headers: headers
        };
        
        fetch("http://stage-sbdc-sfdc.3zeros.club/api/sfdc/create",requestOptions)
        .then(response => response.json())
        .then(data => {
            if(data) { alert("Thanks For Your Application")}
        })
        .catch(error => {
            console.error(error)
        })
    };
    const imagine_a_world = "Imagine a world in 2050. ";
    const formatString = {
        rhetoric:
            "Share a short 5-minute speech on how the solution on a particular social problem can lead to a new society. Format: .mp3, .mp4, or .avi",
        animation:
            "Share a short 5-minute animation expressing a pressing social problem of your choice or a new future without social problems. Format: .mp4 and .mov",
        poster_presentation:
            "4-page awareness poster demonstrating the social problem and a reimagined reality without those problems. Format: .pdf, .jpeg, .jpg and, .png",
        writing:
            "In 1000 words share your writing about a re-imagined future without social problems. Format: .docx or .pdf",
        illustration:
            "Showcase your creativity using a 2-page image of your Drawing or Graphic Designing to address your Social Fiction theme. Format: .jpeg, jpg and .png",
        cinematography:
            "Creating a short 5-minute movie, shot however you want to adhering to the concept of a Social Fiction. (Time limit: 5 mins) Format: .mp4 and .mov",
    };
    const handleChange = (e) => {
        setfileFormat(e.target.value);
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
                    <form encType="multipart/form-data"
                        className="registration-main-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="row">
                            <div className="mt-5 col-lg-6">
                                <h5>Name of Applicant</h5>
                                <input
                                    type="text"
                                    {...register("NameOfApplicant", {
                                        required: true,
                                    })}
                                    required
                                />
                                {/* {errors.name && errors.name.type === "required" && <span>Please fill this field</span>} */}
                                {errors.NameOfApplicant && (
                                    <span>
                                        {errors.NameOfSocialBusiness.message}{" "}
                                        Required
                                    </span>
                                )}
                            </div>
                            <div className="mt-5 col-lg-6">
                                <h5>Name of Institution</h5>
                                <input
                                    type="text"
                                    {...register("NameOfInstitution")}
                                    required
                                    maxLength="100"
                                />
                                {errors.name &&
                                    errors.name.type === "required" && (
                                        <span>Please fill this field</span>
                                    )}
                                {errors.name &&
                                    errors.name.type === "maxLength" && (
                                        <span>
                                            Please write between 10 words
                                        </span>
                                    )}
                            </div>
                        </div>
                        <div className="row ">
                            <div className="mt-5 col-lg-6">
                                <h5>Date of Birth of Applicant</h5>
                                <input
                                    type="date"
                                    {...register("ApplicantDateOfBirth")}
                                    required
                                />
                                {/* {errors.name && errors.name.type === "required" && <span>Please fill this field</span>} */}
                                {errors.NameOfSocialBusiness?.message && (
                                    <span>
                                        {errors.NameOfSocialBusiness.message}
                                    </span>
                                )}
                            </div>
                            <div className="mt-5 col-lg-6">
                                <h5>Country</h5>
                                <select className="form-select" {...register("ApplicantCountry")} required>
                                            <option value="Afganistan">Afghanistan</option>
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
                                            <option selected value="United States of America">United States of America</option>
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
                                <h5>E-mail</h5>
                                <input
                                    type="email"
                                    {...register("ApplicantEmail")}
                                    required
                                />
                                {/* {errors.name && errors.name.type === "required" && <span>Please fill this field</span>} */}
                                {errors.NameOfSocialBusiness?.message && (
                                    <span>
                                        {errors.NameOfSocialBusiness.message}
                                    </span>
                                )}
                            </div>
                            <div className="mt-5 col-lg-6">
                                <h5>Phone</h5>
                                <input
                                    type="text"
                                    {...register("ApplicantPhone")}
                                    required
                                    maxLength="100"
                                />
                                {errors.name &&
                                    errors.name.type === "required" && (
                                        <span>Please fill this field</span>
                                    )}
                                {errors.name &&
                                    errors.name.type === "maxLength" && (
                                        <span>
                                            Please write between 10 words
                                        </span>
                                    )}
                            </div>
                        </div>
                        {/* area of focus */}
                        <div className="row mt-5 register-focus d-flex align-items-center">
                            <div className="col-lg-4">
                                <h5>What social problem are you addressing?</h5>
                            </div>
                            <div className="col-lg-4">
                                <select
                                    {...register("AreaOfFocus")}
                                    className="form-select"
                                >
                                    <option value="circulareconomy">
                                        Circular Economy
                                    </option>
                                    <option value="agriculture" selected>
                                        Agriculture
                                    </option>
                                    <option value="employment">
                                        Employment
                                    </option>
                                    <option value="environmentandclimatechange">
                                        Environment and Climate Change
                                    </option>
                                    <option value="healthandwellbeing">
                                        Health and Well-being
                                    </option>
                                    <option value="microcredit">
                                        Microcredit
                                    </option>
                                    <option value="technologyandinnovation">
                                        Technology and Innovation
                                    </option>
                                    <option value="tourism">Tourism</option>
                                    <option value="sports">Sports</option>
                                    <option value="wash">WASH</option>
                                    <option value="waste">Waste</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>
                            <div className="col-lg-4">
                                <label>If others, please specify:</label>
                                <input
                                    type="text"
                                    placeholder=""
                                    {...register("OtherSocialProblem")}
                                />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-12">
                                <h5>
                                    Tell us a bit more about the social problem
                                    you wish to address and your fictional
                                    solution to solve it.{" "}
                                    <span className="bold">
                                        Write in 100 words.
                                    </span>
                                </h5>
                                <textarea
                                    type="text"
                                    {...register("YourSocialProblem")}
                                    required
                                    maxLength="500"
                                ></textarea>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-12">
                                <h5>What makes your solution unique? </h5>
                                <textarea
                                    {...register("WhatMakesItUnique")}
                                ></textarea>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="col-lg-12">
                                <h5>
                                    What impact can your fictional solution
                                    bring to the environment, economy or
                                    communities?
                                </h5>
                                <textarea
                                    {...register("SolutionImpact")}
                                ></textarea>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-4">
                                <h5>
                                    Upload your idea in any of the creative
                                    categories
                                </h5>
                            </div>
                            <div className="col-lg-4">
                                <select
                                    {...register("CreativeCategory")}
                                    className="form-select"
                                    onChange={handleChange}
                                >
                                    <option selected value="writing">
                                        Writing
                                    </option>
                                    <option value="rhetoric">Rhetoric</option>
                                    <option value="poster_presentation">
                                        Poster Presentation
                                    </option>
                                    <option value="animation">Animation</option>
                                    <option value="illustration">
                                        Illustration
                                    </option>
                                    <option value="cinematography">
                                        Cinematography
                                    </option>
                                </select>
                            </div>
                        </div>
                        <p>{imagine_a_world+formatString[fileFormat]}</p>
                        <div className="mt-5 file-upload">
                            <div className="row">
                                <div className="col-lg-5">
                                    <input
                                        class="form-control"
                                        type="file"
                                        id="formFile"
                                        {...register("UploadedFile")}
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <div className="file-upload-condition"></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 text-center submit-button">
                            <button type="submit">Submit Application</button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    );
};

export default SFDCInputs;
