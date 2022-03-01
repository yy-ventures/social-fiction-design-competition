import React, { useState, useEffect } from "react";
import "./SfdcFaq.css";

const SfdcFaq = () => {
  // State value to show or collapse the FAQ answers
  const [show, setShow] = useState(null);
  // State variable to store the faq data coming from the backend api
  const [faqData, setFaqData] = useState([]);
  // Base Url
  const baseUrl = process.env.REACT_APP_BASE_URL;
  
  // Toggle FAQ answers
  const toggle = (index) => {
    if (show === index) {
      setShow(null);
    } else {
      setShow(index);
    }
  };
  useEffect(() => {
    // fetch options
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    // fetch backend api data for faq section
    fetch(`${baseUrl}/get-faq?type=sfdc`, options)
      .then((response) => response.json())
      .then((data) => {
        setFaqData(data.responses);
      })
      .catch((error) => console.error(error));
  }, [baseUrl]);

  return (
    <section className="sfdc-faq-section">
      <h1>Frequently Asked Questions</h1>
      <div className="sfdc-faq-wrapper">
        {faqData.map(({ id, content, title }, index) => {
          return (
            <div className="sfdc-faq" key={id}>
              <div className="question" onClick={() => toggle(index)}>
                <h4>{title}</h4>
                <span className={show === index ? "close" : "open"}>
                  {show === index ? "-" : "+"}
                </span>
              </div>
              {/* Rich Text Data */}
              <div
                className={show === index ? "answer show" : "answer"}
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SfdcFaq;
