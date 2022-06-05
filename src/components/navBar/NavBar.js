import React from "react";
import "./nav-bar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <p className="logo">
        <Link to="/">
          onur<span>yildirim</span>
        </Link>
      </p>
      <ul className="links">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/">Blog</Link>
        </li>
        <li className="link">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="link">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
