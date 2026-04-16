import React, { useState } from "react";
import "./SfdcFaq.scss";

const SfdcFaq = () => {
  const [show, setShow] = useState(null);

  const toggle = (index) => {
    setShow(show === index ? null : index);
  };

  const faqData = [
    {
      id: 1,
      title: "If I win, how can I use my prize money?",
      content: `
        <p>Winners will receive <strong>USD 10,000</strong> to support the implementation of their Social Fiction vision.</p>
        <p>The funds may be used for activities such as prototyping, pilot implementation, market testing, product or service development, and early-stage operations.</p>
        <p>The objective is to enable winners to take meaningful steps toward bringing their idea to life and creating real-world impact.</p>
      `,
    },
    {
      id: 2,
      title: "Is there any application fee?",
      content: `
        <p>No, there is no application fee. Participation in the competition is completely free of charge at all stages.</p>
      `,
    },
    {
      id: 3,
      title: "Can I apply multiple times?",
      content: `
        <p>No, each participant or team may submit only one application.</p>
        <p>We encourage applicants to submit their strongest and most well-developed idea.</p>
      `,
    },
    {
      id: 4,
      title: "Can I apply from any country in the world?",
      content: `
        <p>Yes. This is a global competition, and applications are welcome from individuals and teams based in any country.</p>
      `,
    },
    {
      id: 5,
      title: "Can I apply with a team?",
      content: `
        <p>We recommend applications be submitted individually.</p>
      `,
    },
    {
      id: 6,
      title: "When will I receive the award money?",
      content: `
        <p>Following the announcement of winners, the organizing team will initiate the process for fund disbursement.</p>
        <p>This will include agreement signing, submission of a fund utilization plan, and completion of due diligence requirements.</p>
        <p>Funds may be disbursed in stages based on agreed milestones.</p>
        <p>The timeline for disbursement may vary depending on the completeness of documentation, clarity of the proposed utilization plan, and compliance with reporting requirements.</p>
      `,
    },
    {
      id: 7,
      title: "Are there any reporting requirements after receiving the grant?",
      content: `
        <p>Yes. Winners will be required to submit a brief implementation plan and periodic progress updates to ensure that the funds are being used effectively.</p>
        <p>A final report may also be requested to document outcomes, learnings, and impact.</p>
        <p>Requirements will be communicated during the agreement signing period.</p>
      `,
    },
  ];

  return (
    <div className="sfdc-faq-container">
      <h1>FAQ</h1>
      <section className="sfdc-faq-section">
        <div className="sfdc-faq-wrapper">
          {faqData.map(({ id, title, content }, index) => (
            <div className="sfdc-faq" key={id}>
              <div className="question" onClick={() => toggle(index)}>
                <h4>{title}</h4>
                <span className={show === index ? "arrow open" : "arrow"}>
                  ▼
                </span>
              </div>

              <div
                className={show === index ? "answer show" : "answer"}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SfdcFaq;