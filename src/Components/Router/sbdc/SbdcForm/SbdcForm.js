import React, { useRef } from "react";
import "./SbdcForm.scss";
import { useForm } from "react-hook-form";
const SbdcForm = () => {
  // Base Url
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const { register, handleSubmit } = useForm();
  const formRef = useRef(null);
  const onsubmit = (data) => {
    let formdata = new FormData();
    formdata.append("name", data.PartnerName);
    formdata.append("email", data.PartnerEmail);
    formdata.append("name_of_organizations", data.PartnerOrganization);
    formdata.append("message", data.PartnerMessage);

    let requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    formRef.current.reset();
    fetch(`${baseUrl}/partners/create`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    alert("Thank you! Your message has been sent.");
  };
  return (
    <section className="sbdc-form" id="partners-section">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div>
            <div className="sbdc-form-header text-center p-4">
              <h2>become a partner</h2>
              <p>
                If you are willing to invest, sponsor or collaborate, please fill in the form below
                to start your journey with us!
              </p>
            </div>
            <div className="sbdc-form-body">
              <form onSubmit={handleSubmit(onsubmit)} ref={formRef}>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    {...register("PartnerName")}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Name of Your Organization"
                    required
                    {...register("PartnerOrganization")}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    {...register("PartnerEmail")}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    required
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

export default SbdcForm;
