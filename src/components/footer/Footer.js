import React from "react";
import "./footer.css";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <p className="copyright">Onur Yıldırım 2022</p>
      <div className="footer-links">
        <div className="link">
          <a href="https://www.instagram.com/onuremreyy/">
            <FaInstagram />
          </a>
        </div>
        <div className="link">
          <a href="https://github.com/Onure-y">
            <FaGithub />
          </a>
        </div>
        <div className="link">
          <a href="https://www.linkedin.com/in/onure-yildirim/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
