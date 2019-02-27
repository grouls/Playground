import React         from "react";
import { Link }      from "react-router-dom";
import { githubURL } from "../../config";

const IntroText = () => (
  <>
    <p>
      Welcome to the
      <a href={githubURL} target="_blank" rel="noopener noreferrer">
        {" "}
        JoeFads{" "}
      </a>{" "}
      playground!
    </p>
    <p>
      Visit the<Link to="/tasks"> Tasks </Link> page to get started.
    </p>
    <p>This was built from scratch to act as a lightweight example using: </p>
  </>
);

export default IntroText;