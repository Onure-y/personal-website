import React from "react";
import "./contact-content.css";

function ContactContent() {
  return (
    <div className="contact-content-container">
      <p className="contact-content">
        If you have any question about me or my work, please do not hesitate to
        contact me via email or one of these social accounts. You can write to
        me in English or Turkish;
      </p>
      <ul className="contact-links">
        <li className="contact-link">
          Email:{" "}
          <a href="mailto:onuremre555@gmail.com">onuremre555@gmail.com</a>
        </li>
        <li className="contact-link">
          Instagram:{" "}
          <a href="https://www.instagram.com/onuremreyy/">@onuremreyy</a>
        </li>
        <li className="contact-link">
          Github:{" "}
          <a href="https://github.com/Onure-y">@Onure-y</a>
        </li>
        <li className="contact-link">
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/onure-yildirim/">@onure-yildirim</a>
        </li>
      </ul>
    </div>
  );
}

export default ContactContent;
