import React from 'react';
import { useForm } from 'react-hook-form';
import "./SFDCInputs.scss";

const SFDCInputs = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="sfdc-registration-input">
            <div className="form-input-header text-center mt-5">
                <p>*Please fill up this form to submit your idea if you are of <span className="bold">age 12 to 35 and have at least one female co-founder.</span></p>
            </div>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <form className="registration-main-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="mt-5 col-lg-6">
                                <input type="text" placeholder="Name of Applicant" {...register("NameOfApplicant")} required />
                                {/* {errors.name && errors.name.type === "required" && <span>Please fill this field</span>} */}
                                {errors.NameOfSocialBusiness?.message && <span>{errors.NameOfSocialBusiness.message}</span>}
                            </div>
                            <div className="mt-5 col-lg-6">
                                <input type="text" placeholder="Name of Institution" {...register("NameOfInstitution")} required maxLength="100"/>
                                {errors.name && errors.name.type === "required" && <span>Please fill this field</span>}
                                {errors.name && errors.name.type === "maxLength" && <span>Please write between 10 words</span> }
                            </div>
                        </div>
                        <div className="row ">
                            <div className="mt-5 col-lg-6">
                                <input type="date" placeholder="Date of Birth of Applicant" {...register("ApplicantDateOfBirth")} required />
                                {/* {errors.name && errors.name.type === "required" && <span>Please fill this field</span>} */}
                                {errors.NameOfSocialBusiness?.message && <span>{errors.NameOfSocialBusiness.message}</span>}
                            </div>
                            <div className="mt-5 col-lg-6">
                                <input type="text" placeholder="Country" {...register("ApplicantCountry")} required maxLength="100"/>
                                {errors.name && errors.name.type === "required" && <span>Please fill this field</span>}
                                {errors.name && errors.name.type === "maxLength" && <span>Please write between 10 words</span> }
                            </div>
                        </div>
                        <div className="row ">
                            <div className="mt-5 col-lg-6">
                                <input type="email" placeholder="E-mail" {...register("ApplicantEmail")} required />
                                {/* {errors.name && errors.name.type === "required" && <span>Please fill this field</span>} */}
                                {errors.NameOfSocialBusiness?.message && <span>{errors.NameOfSocialBusiness.message}</span>}
                            </div>
                            <div className="mt-5 col-lg-6">
                                <input type="text" placeholder="Phone" {...register("ApplicantPhone")} required maxLength="100"/>
                                {errors.name && errors.name.type === "required" && <span>Please fill this field</span>}
                                {errors.name && errors.name.type === "maxLength" && <span>Please write between 10 words</span> }
                            </div>
                        </div>
                        {/* area of focus */}
                        <div className="row mt-5 register-focus d-flex align-items-center">
                            <div className="col-lg-4">
                                <h5>What social problem are you addressing?</h5>
                            </div>
                            <div className="col-lg-4">
                                <select {...register("AreaOfFocus")} className="form-select">
                                    <option selected value="writing">Writing</option>
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
                                <input type="text" placeholder="" {...register("OtherSocialProblem")} />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-12">
                                <textarea type="text" placeholder="Tell us a bit more about the social problem you wish to address and your fictional solution to solve it. Write in 100 words." {...register("YourSocialProblem")} required maxLength="500"></textarea>
                            </div>
                        </div>
                        <div className="row mt-5">
                        <div className="col-lg-12">
                            <h5>What makes your solution unique? </h5>
                            <textarea {...register("WhatMakesItUnique")}></textarea>
                            </div>
                        </div>
                        <div className="mt-5">
                        <div className="col-lg-12">
                            <h5>What impact can your fictional solution bring to the environment, economy or communities?</h5>
                            <textarea {...register("SolutionImpact")}></textarea>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-4">
                                <h5>Upload your idea in any of the creative categories</h5>
                            </div>
                            <div className="col-lg-4">
                                <select {...register("CreativeCategory")} className="form-select">
                                    <option selected value="writing">Writing</option>
                                    <option value="feasibility">Feasibility</option>
                                    <option value="earlystage">Early-stage</option>
                                </select>
                            </div>
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

export default SFDCInputs;