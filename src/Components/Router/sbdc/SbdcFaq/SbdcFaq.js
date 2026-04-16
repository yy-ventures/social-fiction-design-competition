import { useState } from "react";
import "./SbdcFaq.css";

const SbdcFaq = () => {
  const [show, setShow] = useState(null);

  const toggle = (index) => {
    setShow(show === index ? null : index);
  };

  const faqData = [
    {
      id: 1,
      title: "If I win, how can I use my prize money?",
      content:
        "Winners will receive USD 10,000 to support the implementation of their Social Business idea. The funds may be used for activities such as prototyping, pilot implementation, market testing, product or service development, and early-stage operations. The objective is to enable winners to take meaningful steps toward bringing their idea to life and creating real-world impact.",
    },
    {
      id: 2,
      title: "Is there any application fee?",
      content:
        "No, there is no application fee. Participation in the competition is completely free of charge at all stages.",
    },
    {
      id: 3,
      title: "Can I apply multiple times?",
      content:
        "No, each participant or team may submit only one application. We encourage applicants to submit their strongest and most well-developed idea.",
    },
    {
      id: 4,
      title: "Can I apply from any country in the world?",
      content:
        "Yes. This is a global competition, and applications are welcome from individuals and teams based in any country.",
    },
    {
      id: 5,
      title: "Can I apply with a team?",
      content:
        "Yes, participants may apply individually or as a team. For team applications, one member should be designated as the primary applicant and point of contact for all communications.",
    },
    {
      id: 6,
      title: "When will I receive the award money?",
      content:
        "Following the announcement of winners, the organizing team will initiate the process for fund disbursement. This will include agreement signing, submission of a fund utilization plan, and completion of due diligence requirements. Funds may be disbursed in stages based on agreed milestones. The timeline for disbursement may vary depending on the completeness of documentation, clarity of the proposed utilization plan, and compliance with reporting requirements.",
    },
    {
      id: 7,
      title: "Are there any reporting requirements after receiving the grant?",
      content:
        "Yes. Winners will be required to submit a brief implementation plan and periodic progress updates to ensure that the funds are being used effectively. A final report may also be requested to document outcomes, learnings, and impact. Requirements will be communicated during agreement signing period. ",
    },
  ];

  return (
    <div className="sbdc-faq-container">
      <h1>Frequently Asked Questions</h1>{" "}
      <section className="sbdc-faq-section">
        <div className="sbdc-faq-wrapper">
          {faqData.map(({ id, title, content }, index) => (
            <div className="sbdc-faq" key={id}>
              <div className="question" onClick={() => toggle(index)}>
                <h4>{title}</h4>
                <span className={show === index ? "close" : "open"}>
                  {show === index ? "-" : "+"}
                </span>
              </div>

              <div className={show === index ? "answer show" : "answer"}>
                <p>{content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SbdcFaq;
