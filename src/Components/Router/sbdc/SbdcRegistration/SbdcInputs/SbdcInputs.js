import React from 'react';
import { useForm } from 'react-hook-form';
import "./SbdcInputs.scss";

const SbdcInputs = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="sbdc-registration-input">
            <div className="form-input-header text-center mt-5">
                <p>*Please fill up this form to submit your idea if you are of <span className="bold">age 12 to 35 and have at least one female co-founder.</span></p>
            </div>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <form className="registration-main-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-lg-6">
                                <input type="text" placeholder="Name of Social Business/Idea" {...register("NameOfSocialBusiness")} required />
                                {/* {errors.name && errors.name.type === "required" && <span>Please fill this field</span>} */}
                                {errors.NameOfSocialBusiness?.message && <span>{errors.NameOfSocialBusiness.message}</span>}
                            </div>
                            <div className="col-lg-6">
                                <input type="text" placeholder="What is your vision for the Social Business/Idea?" {...register("YourVision")} required maxLength="100"/>
                                {errors.name && errors.name.type === "required" && <span>Please fill this field</span>}
                                {errors.name && errors.name.type === "maxLength" && <span>Please write between 10 words</span> }
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-12">
                                <textarea type="text" placeholder="Tell us a bit more about your initiative (100 words max)" {...register("YourInitiative")} required maxLength="100"></textarea>
                            </div>
                        </div>
                        <div className="row mt-5 registration-radio-top">
                            <div className="col-lg-4">
                                <h5>Are you are applying as an individual or a team? </h5>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    <input type="radio" id="team" checked/>
                                    <label htmlFor="team">Team</label>
                                </div>
                                <div>
                                    <input type="radio" />
                                    <label htmlFor="individual">Individual</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 registration-co-founder">
                            <div className="col-lg-4">
                                <h5>Founder(s) Information</h5>
                                <p>*Your team may have more than two co-founders. Please provide basic contact info of two c-founders, including one female co-founder.</p>
                            </div>
                            <div className="col-lg-4 pe-5">
                                <h5>CO-Founder 1</h5>
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
                            </div>
                            <div className="col-lg-4">
                                <h5>CO-Founder 2</h5>
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
                            </div>
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
                            <h5>How is your Social Business reducing carbon emission, creating jobs or fighting poverty? Please tell us in 100 words.</h5>
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
                            <div className="col-lg-6">
                                <div>
                                    <input type="radio" id="team" checked />
                                    <label htmlFor="team">Team</label>
                                </div>
                                <div>
                                    <input type="radio" />
                                    <label htmlFor="individual">Individual</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 registration-law-curve">
                            <input placeholder="If yes, please specify which law your Social Business is registered under."></input>
                        </div>
                        <div className="mt-5">
                            <p>**Our program has primarily been designed for the needs of Social Businesses; however, non-profits, <br/> for-profits, co-operatives, and community contribution businesses are all eligible as long as they serve <br/> a crucial social or environmental cause and are willing to incorporate a Social Business model moving forward.</p>
                        </div>
                        <div className="mt-5 registration-law-curve">
                            <h5>How does your Social Business plan to make money?</h5>
                            <input></input>
                        </div>
                        <div className="mt-5">
                            <h5>Is there a way through which we can learn more about your Social Business/Idea? (Website, News Article, Publication, Press Release, Interview)</h5>

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