import React from "react";
import WelcomeComp from "../components/aboutWelcome/AboutWelcome";
import ContactContent from "../components/ContactContent/ContactContent";

function Contact() {
  return (
    <div>
      <WelcomeComp pageName="Contact" />
      <ContactContent />
    </div>
  );
}

export default Contact;
