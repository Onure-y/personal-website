import React from "react";
import "./welcome-content.css";

function WelcomeContent() {
  return (
    <div className="content-container">
      <div className="content">
        <p className="title">Hello I’m Onur</p>
        <p className="subtitle">I’m a Software Developer and musician</p>
      </div>
      <div className="profile-photo-cover">
          <div className="profile-photo"></div>
      </div>
    </div>
  );
}

export default WelcomeContent;
