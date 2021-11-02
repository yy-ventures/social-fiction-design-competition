import React from 'react'

import "./InfoBar.scss";

export default function InfoBar() {
  return (
    <div className="infobar">
      <div id="infobar-skyblue-circle"></div>
      <div className="flex-container">
      <h4>Find your entrepreneurial drive and share with us<br/><span id="infobar-blue-text"> your ideas for a safer and better world!</span></h4>
      <div className="button-container">
        <a href="/" className="btn btn-blue">COMPETE AT SBDC</a>
          <a className="btn btn-blue" href="/">COMPETE AT SFDC</a>
        </div>
      </div>
    </div>
  )
}
