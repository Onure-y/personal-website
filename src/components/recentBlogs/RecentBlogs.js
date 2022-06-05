import React from "react";
import "./recent-blogs.css";
import BlogComp from "../blogComp/BlogComp";

function RecentBlogs() {
  return (
    <div className="recent-blog-container">
      <BlogComp
        title="Folder Structure in Flutter"
        subtitle="Folder structure is a base principle in software development. Especially when you're working on a big project with a big team"
        dotColor="blue"
        language="Dart"
        date="June 04 2022"
      />
      <BlogComp
        title="Folder Structure in Flutter"
        subtitle="Folder structure is a base principle in software development. Especially when you're working on a big project with a big team"
        dotColor="yellow"
        language="Javascript"
        date="June 06 2022"
      />
      <BlogComp
        title="Folder Structure in Flutter"
        subtitle="Folder structure is a base principle in software development. Especially when you're working on a big project with a big team"
        dotColor="yellow"
        language="Javascript"
        date="June 06 2022"
      />
      <button className="all-blogs-button">See All Blog Posts</button>
    </div>
  );
}

export default RecentBlogs;
