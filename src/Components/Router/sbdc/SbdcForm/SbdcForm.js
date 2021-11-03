import React from 'react';
import "./SbdcForm.scss";

const SbdcForm = () => {
    return (
        <section className="sbdc-form" id="partners-section">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div>
                        <div className="sbdc-form-header text-center p-4">
                            <h2>become a partner</h2>
                            <p>Please fill in the form below to start your journey with us!</p>
                        </div>
                        <div className="sbdc-form-body">
                            <form>
                                <div>
                                    <input type="text" placeholder="Your Name"/>
                                </div>
                                <div>
                                    <input type="text" placeholder="Name of Your Organization"/>
                                </div>
                                <div>
                                    <input type="email" placeholder="Your Email"/>
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

export default SbdcForm;