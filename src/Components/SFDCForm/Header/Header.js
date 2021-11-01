import React from "react";
import sfdclogo from "../../../assets/images/logos/sfdc2x.jpg";

import "./Header.scss";
export default function Header() {
    return (
        <div className="sfdc-form-header">
            <p>
                The Social Fiction Design Competition is welcoming talented
                young minds to address real social challenges by reimagining a
                new world through social innovation and creativity. This
                competition is a platform for the youth to envision a world that
                “could be” if social problems were fixed, producing new
                fictional ways to solve them.
            </p>
            <img src={sfdclogo} alt="SFDC-logo" />
        </div>
    );
}
