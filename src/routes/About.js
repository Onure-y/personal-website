import React from "react";
import WelcomeComp from "../components/aboutWelcome/AboutWelcome";
import AboutContent from "../components/aboutContent/AboutContent";
import Journey from "../components/journey/Journey";

function About() {
  return (
    <div>
      <WelcomeComp pageName="About Me" />
      <AboutContent />
      <Journey />
    </div>
  );
}

export default About;
