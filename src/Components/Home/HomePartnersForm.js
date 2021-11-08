import React, { useRef } from "react";
import "./HomePartnersForm.scss";
import fictionArtOne from "../../assets/fiction_art_1.png";
import { useForm } from "react-hook-form";

const HomePartnersForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const formRef = useRef(null);
    const onsubmit = (data) => {
        let formdata = new FormData();
        formdata.append("name", data.PartnerName);
        formdata.append("email", data.PartnerEmail);
        formdata.append("name_of_organization", data.PartnerOrganization);
        formdata.append("message", data.PartnerMessage);

        let requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
        };

        fetch(
            "http://stage-sbdc-sfdc.3zeros.club/api/partners/create",
            requestOptions
        )
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
        formRef.current.reset();
        alert("Thank you! Your message has been sent.");
    };
    return (
        <section
            className="home-partners-form position-relative"
            id="partners-section"
        >
            <div className="blue-rectangle"></div>
            <div className="form-rectangle"></div>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 come-up">
                    <div>
                        <div className="home-partners-form-header text-center p-4">
                            <h2>become a partner</h2>
                            <p>
                                Please fill in the form below to start your
                                journey with us!
                            </p>
                        </div>
                        <div className="home-partners-form-body">
                            <form
                                onSubmit={handleSubmit(onsubmit)}
                                ref={formRef}
                            >
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        {...register("PartnerName")}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Name of Your Organization"
                                        {...register("PartnerOrganization")}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        {...register("PartnerEmail")}
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Your Message"
                                        {...register("PartnerMessage")}
                                    ></textarea>
                                </div>
                                <div className="text-center mt-5">
                                    <button type="submit">submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </section>
    );
};

export default HomePartnersForm;
