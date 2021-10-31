import React from 'react';
import "./SfdcForm.scss";
import fictionArtOne from "../../../../assets/fiction_art_1.png";

const SfdcForm = () => {
    return (
        <section className="sfdc-form position-relative">
            <img src={fictionArtOne} alt="fiction-art-one" />
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div>
                        <div className="sfdc-form-header text-center p-4">
                            <h2>become a partner</h2>
                            <p>Please fill in the form below to start your journey with us!</p>
                        </div>
                        <div className="sfdc-form-body">
                            <form>
                                <div>
                                    <input type="text" placeholder="Your Name" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Name of Your Organization" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Your Email" />
                                </div>
                                <div>
                                    <textarea placeholder="Your Message"></textarea>
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

export default SfdcForm;