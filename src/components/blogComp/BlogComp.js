import React from "react";
import "./blog-comp.css";

function BlogComp(props) {
  return (
    <div className="blog-container">
      <div className="titles">
        <p className="blog-title">{props.title}</p>
        <p className="blog-subtitle">
          {props.subtitle}
        </p>
      </div>
      <div className="info">
        <div className="language-container">
          <div className={`dot ${props.dotColor}`}></div>
          <p className="language">{props.language}</p>
        </div>
        <p className="date">{props.date}</p>
      </div>
    </div>
  );
}

export default BlogComp;
