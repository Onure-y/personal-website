import React from "react";
import "./about-content.css";
import { Link } from "react-router-dom";

function AboutContent() {
  return (
    <div className="about-content-container">
      <p className="about-content-1">
        I am <span>Onur Emre YILDIRIM</span>, a computer engineering student and
        freelance software developer. I have been working with flutter for
        mobile application, React and NodeJS for web application about 2 years.
      </p>
      <p className="about-content-2">
        You can read my <Link className="about-links" to="/">Blog </Link> 
         and  <Link className="about-links" to="/contact">Contact </Link> me if there is something you want to ask.
      </p>
    </div>
  );
}

export default AboutContent;
