import React from "react";

import "./draftPopup.scss";

function DraftPopup({ text, userID, userPass }) {
  return (
    <div className="draft-container">
      <div className="draft-popup">
        <h1>{text}</h1>
        {userID && <span>Your user ID: {userID}</span>}
        {userPass && <span>Your Password: {userPass}</span>}
        {userID && userPass && (
          <p>
            An email with the login credentials have also been sent to your
            inbox.
          </p>
        )}

        <a href="/sfdc-registration">Close</a>
      </div>
    </div>
  );
}

export default DraftPopup;
