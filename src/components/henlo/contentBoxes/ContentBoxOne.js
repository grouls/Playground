import React from "react";
import { Link } from "react-router-dom";
import TechContainer from "../tech";

const url = "https://github.com/joefads/Playground";

const ContentBoxOne = () => (
  <div className="contentBox contentBox_1">
    <h2 className="header">henlo</h2>
    <div className="intro">
      <p>
        Welcome to the<a href={url} target="_blank" rel="noopener noreferrer"> JoeFads </a> playground!
      </p>
      <p>
        Visit the<Link to="/tasks"> Tasks </Link> page to get started.
      </p>
      <p>This was built from scratch to act as a lightweight example using: </p>
    </div>
    <TechContainer />
  </div>
);

export default ContentBoxOne;
