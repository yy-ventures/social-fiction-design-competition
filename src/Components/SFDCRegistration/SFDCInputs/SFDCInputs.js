import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import "./SFDCInputs.scss";

const SFDCInputs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [fileFormat, setfileFormat] = useState("writing");

    const onSubmit = data => console.log(data);
    const formatString = {
        rhetoric: "Share a short 5-minute speech on how the solution on a particular social problem can lead to a new society. Format: .mp3, .mp4, or .avi",
        animation: "Share a short 5-minute animation expressing a pressing social problem of your choice or a new future without social problems. Format: .mp4 and .mov",
        poster_presentation: "4-page awareness poster demonstrating the social problem and a reimagined reality without those problems.",
        writing: "In 1000 words share your writing about a re-imagined future without social problems. Format: .docx or .pdf",
        illustration: "Showcase your creativity using a 2-page image of your Drawing or Graphic Designing to address your Social Fiction theme. Format: .jpeg, jpg and .png",
        cinematography: "Creating a short 5-minute movie, shot however you want to adhering to the concept of a Social Fiction. (Time limit: 5 mins) Format: .mp4 and .mov",

    }
    const handleChange = (e) => {
        setfileFormat(e.target.value);
    }


    return (
        <div className="sfdc-registration-input">
            <div className="form-input-header text-center mt-5">
                <p>*Please fill up this form to submit your idea if you are of <span className="bold">age 12 to 35.</span></p>
            </div>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <form className="registration-main-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="mt-5 col-lg-6">
                                <h5>Name of Applicant</h5>
                                <input type="text" {...register("NameOfApplicant", { required: true })} required />
                                {/* {errors.name && errors.name.type === "required" && <span>Please fill this field</span>} */}
                                {errors.NameOfApplicant && <span>{errors.NameOfSocialBusiness.message} Required</span>}
                            </div>
                            <div className="mt-5 col-lg-6">
                                <h5>Name of Institution</h5>
                                <input type="text"  {...register("NameOfInstitution")} required maxLength="100"/>
                                {errors.name && errors.name.type === "required" && <span>Please fill this field</span>}
                                {errors.name && errors.name.type === "maxLength" && <span>Please write between 10 words</span> }
                            </div>
                        </div>
                        <div className="row ">
                            <div className="mt-5 col-lg-6">
                                <h5>Date of Birth of Applicant</h5>
                                <input type="date"  {...register("ApplicantDateOfBirth")} required />
                                {/* {errors.name && errors.name.type === "required" && <span>Please fill this field</span>} */}
                                {errors.NameOfSocialBusiness?.message && <span>{errors.NameOfSocialBusiness.message}</span>}
                            </div>
                            <div className="mt-5 col-lg-6">
                                <h5>Country</h5>
                                <input type="text"  {...register("ApplicantCountry")} required maxLength="100"/>
                                {errors.name && errors.name.type === "required" && <span>Please fill this field</span>}
                                {errors.name && errors.name.type === "maxLength" && <span>Please write between 10 words</span> }
                            </div>
                        </div>
                        <div className="row ">
                            <div className="mt-5 col-lg-6">
                                <h5>E-mail</h5>
                                <input type="email" {...register("ApplicantEmail")} required />
                                {/* {errors.name && errors.name.type === "required" && <span>Please fill this field</span>} */}
                                {errors.NameOfSocialBusiness?.message && <span>{errors.NameOfSocialBusiness.message}</span>}
                            </div>
                            <div className="mt-5 col-lg-6">
                                <h5>Phone</h5>
                                <input type="text"  {...register("ApplicantPhone")} required maxLength="100"/>
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
                                    
                                    <option value="circulareconomy">Circular Economy</option>
                                    <option value="agriculture" selected>Agriculture</option>
                                    <option value="employment">Employment</option>
                                    <option value="environmentandclimatechange" >Environment and Climate Change</option>
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
                                <h5>Tell us a bit more about the social problem you wish to address and your fictional solution to solve it. <span className="bold">Write in 100 words.</span></h5>
                                <textarea type="text"  {...register("YourSocialProblem")} required maxLength="500"></textarea>
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
                                <select {...register("CreativeCategory")} className="form-select" onChange={handleChange}>
                                    <option selected value="writing">Writing</option>
                                    <option value="rhetoric">Rhetoric</option>
                                    <option value="poster_presentation">Poster Presentation</option>
                                    <option value="animation">Animation</option>
                                    <option value="illustration">Illustration</option>
                                    <option value="cinematography">Cinematography</option>
                                </select>
                            </div>
                        </div>
                        <p>{formatString[fileFormat]}</p>
                        <div className="mt-5 file-upload">
                            <div className="row">
                                <div className="col-lg-5">
                                    <input class="form-control" type="file" id="formFile" {...register("UploadedFile")}/>
                                </div>
                                <div className="col-lg-3">
                                    <div className="file-upload-condition">
                                    </div>
                                </div>
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