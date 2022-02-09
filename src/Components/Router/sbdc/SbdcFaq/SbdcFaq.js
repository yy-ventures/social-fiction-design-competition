import React, { useState } from "react";
import "./SbdcFaq.css";
import { faqData } from "./SbdcFaqData";

const SbdcFaq = () => {
  // State value to show or collapse the FAQ answers
  const [show, setShow] = useState(null);
  // Toggle FAQ answers
  const toggle = (index) => {
    if (show === index) {
      setShow(null);
    } else {
      setShow(index);
    }
  };

  return (
    <section className="sbdc-faq-section">
      <h1>Frequently Asked Question</h1>
      <div className="sbdc-faq-wrapper">
        {faqData.map(({ question, answer }, index) => {
          return (
            <div className="sbdc-faq">
              <div className="question" onClick={() => toggle(index)}>
                <h4>{question}</h4>
                <span className={show === index ? "close" : "open"}>
                  {show === index ? "-" : "+"}
                </span>
              </div>
              <div className={show === index ? "answer show" : "answer"}>
                {answer.map(({ content }) => (
                  <p>{content}</p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SbdcFaq;
