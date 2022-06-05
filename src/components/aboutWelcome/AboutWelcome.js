import React from "react";
import './about-welcome.css'

function AboutWelcome(props) {
  return (
    <div className="content-container">
        <p className="title">{props.pageName}</p>
    </div>
  );
}

export default AboutWelcome;
