import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "./SbdcInputs.scss";

const SbdcInputs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const [isCheckedOne, setIsCheckedOne] = useState(false)
    const [isCheckedTwo, setIsCheckedTwo] = useState(false)
    const [isUnderLaw, setIsUnderLaw] = useState(false)
    const handleCheckBoxOne = (e) => {
        setIsCheckedOne(true)
        setIsCheckedTwo(true)
    }
    const handleCheckBoxTwo = (e) => {
        setIsCheckedTwo(true)
        setIsCheckedOne(false)
    }
    const handleUnderLawYes = e => {
        setIsUnderLaw(true)
    } 
    const handleUnderLawNo = e => {
        setIsUnderLaw(false)
    } 
    return (
        <div className="sbdc-registration-input">
            <div className="form-input-header text-center mt-5">
                <p>*Please fill up this form to submit your idea if you are of <span className="bold">age 12 to 35.</span></p>
            </div>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <form className="registration-main-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-lg-6">
                            <h5 className="mt-5 white-space-no-wrap">Name of Social Business/Idea</h5>
                                <input type="text" {...register("NameOfSocialBusiness")} required />
                                {/* {errors.name && errors.name.type === "required" && <span>Please fill this field</span>} */}
                                {errors.NameOfSocialBusiness?.message && <span>{errors.NameOfSocialBusiness.message}</span>}
                            </div>
                            <div className="col-lg-6">
                            <h5 className="mt-5 white-space-no-wrap" >What is your vision for the Social Business/Idea?</h5>
                                <input type="text"  {...register("YourVision")} required/>
                                {errors.name && errors.name.type === "required" && <span>Please fill this field</span>}
                                {errors.name && errors.name.type === "maxLength" && <span>Please write between 10 words</span> }
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-12">
                                <h5>Tell us a bit more about your initiative <span className="bold">(100 words max)</span></h5>
                                <textarea type="text" {...register("YourInitiative")} required></textarea>
                            </div>
                        </div>
                        <div className="row mt-5 registration-radio-top">
                            <div className="col-lg-4">
                                <h5>Are you are applying as an individual or a team? </h5>
                            </div>
                            <div className="col-lg-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={handleCheckBoxOne} defaultChecked={false}/>
                                    <label class ="form-check-label" for="flexCheckDefault">
                                    Team
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={handleCheckBoxTwo}/>
                                    <label class ="form-check-label" for="flexCheckDefault">
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
                            {isCheckedOne && <div className="col-lg-4 pe-5">
                                <h5>Co-Founder 1</h5>
                                <div>
                                    <div>
                                        <input type="text" placeholder="Name" {...register("CoFounderOneName")}></input>
                                    </div>
                                    <div>
                                        <input type="date" placeholder="Date" {...register("CoFonderOneBirthDate")}></input>
                                    </div>
                                    <div>
                                        <select {...register("CoFounderOneGender")}>
                                            <option value="female">Female</option>
                                            <option value="male">Male</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email" {...register("CoFounderOneEmail")}></input>
                                    </div>
                                    <div>
                                        <input type="number" placeholder="Number" {...register("CoFounderOneNumber")}></input>
                                    </div>
                                </div>
                            </div>}
                            {isCheckedTwo && <div className="col-lg-4">
                                <h5>{isCheckedOne ? "Co-Founder 2" : "Founder"}</h5>
                                <div>
                                    <div>
                                        <input type="text" placeholder="Name" {...register("CoFounderTwoName")}></input>
                                    </div>
                                    <div>
                                        <input type="date" placeholder="Date" {...register("CoFonderTwoBirthDate")}></input>
                                    </div>
                                    <div>
                                        <select {...register("CoFounderTwoGender")}>
                                            <option value="female">Female</option>
                                            <option value="male">Male</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email" {...register("CoFounderTwoEmail")}></input>
                                    </div>
                                    <div>
                                        <input type="number" placeholder="Number" {...register("CoFounderTwoNumber")}></input>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        {/* area of focus */}
                        <div className="row mt-5 register-focus d-flex align-items-center">
                            <div className="col-lg-4">
                                <h5>What is your Area of Focus?</h5>
                            </div>
                            <div className="col-lg-4">
                                <select {...register("AreaOfFocus")} className="form-select">
                                    <option selected value="agriculture">Agriculture</option>
                                    <option value="circulareconomy">Circular Economy</option>
                                    <option value="employment">Employment</option>
                                    <option value="environmentandclimatechange">Environment and Climate Change</option>
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
                                <label>If others, please specify:</label>
                                <input type="text" placeholder="" {...register("OtherAreaOfFocus")} />
                            </div>
                        </div>
                        <div className="mt-5">
                            <h5>How is your Social Business reducing carbon emission, creating jobs or fighting poverty? <span className="bold"> Please tell us in 100 words.</span></h5>
                            <textarea {...register("ReducingCarbonEmission")}></textarea>
                        </div>
                        <div className="mt-5">
                            <h5>What innovation is your Social Business bringing to your market?</h5>
                            <textarea {...register("BringingToYourMarket")}></textarea>
                        </div>
                        <div className="mt-5">
                            <h5>We respect and welcome both product and process innovation offered by enterprises <br/> and we would love to know more about your enterprise’s innovation. <span className="bold">Write in 150 words.</span></h5>
                            <textarea {...register("BringingToYourMarket")}></textarea>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-4">
                                <h5>At what stage is your venture?</h5>
                            </div>
                            <div className="col-lg-4">
                                <select {...register("StageOfVentures")} className="form-select">
                                    <option selected value="ideastage">Idea-stage</option>
                                    <option value="feasibility">Feasibility</option>
                                    <option value="earlystage">Early-stage</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-5 registration-law">
                            <div className="col-lg-6">
                                <h5>Is the Social Business registered as an entity under the law?</h5>
                            </div>
                            <div className="col-lg-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="yes" id="flexCheckDefault" {...register("UnderTheLaw")}  onChange={handleUnderLawYes} defaultChecked={true}/>
                                    <label class ="form-check-label" for="flexCheckDefault">
                                    Yes
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="no" id="flexCheckDefault" {...register("UnderTheLaw")}  onChange={handleUnderLawNo}/>
                                    <label class ="form-check-label" for="flexCheckDefault">
                                    No
                                    </label>
                                </div>
                            </div>
                        </div>
                        {isUnderLaw && <div className="mt-5 registration-law-curve">
                            <input placeholder="If yes, please specify which law your Social Business is registered under." {...register("YesUnderTheLaw")} ></input>
                        </div>}
                        <div className="mt-5">
                            <p>**Our program has primarily been designed for the needs of Social Businesses; however, non-profits, <br/> for-profits, co-operatives, and community contribution businesses are all eligible as long as they serve <br/> a crucial social or environmental cause and are willing to incorporate a Social Business model moving forward.</p>
                        </div>
                        <div className="mt-5 registration-law-curve">
                            <h5>How does your Social Business plan to make money?</h5>
                            <input {...register("MakeMoney")} ></input>
                        </div>
                        <div className="mt-5 link-input">
                            <h5>Is there a way through which we can learn more about your Social Business/Idea? <br/><span className="bold">(Website, News Article, Publication, Press Release, Interview)</span></h5>
                            <div className="mt-5">
                                <div className="row">
                                    <div className="col-lg-1"><h5>Link 1</h5></div>
                                    <div className="col-lg-6"><input type="url" {...register("FirstLink")} /></div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-1"><h5>Link 2</h5></div>
                                    <div className="col-lg-6"><input type="url" {...register("SecondLink")} /></div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <button>+ Add more</button>
                            </div>
                        </div>
                        <div className="mt-5 file-upload">
                            <div className="row">
                                <div className="col-lg-3"><h5>Please upload your Pitch Deck</h5></div>
                                <div className="col-lg-5">
                                    <input class="form-control" type="file" id="formFile" {...register("UploadedFile")}/>
                                </div>
                                <div className="col-lg-3">
                                    <div className="file-upload-condition">
                                        <p>PPT - Pitch Deck (10 slides max)</p>
                                        <p>PDF - Flyer (2 pages max)</p>
                                        <p>DOC - 800 Words</p>
                                        <p>MOV/MP4 - 3 mins (max)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="registration-footer mt-1">
                            <p>***Submit an introduction to your team and Social Business idea. Mention the problem you aim to address and the proposed solution. <br/> Briefly highlight any relevant information regarding Beneficiaries, Value Proposition, Achievements, Financial forecasts etc. </p>
                        </div>
                        <div className="mt-5 text-center">
                            <button type="submit">Submit Application</button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    );
};

export default SbdcInputs;