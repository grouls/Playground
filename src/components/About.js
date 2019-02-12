import React from "react";
import birb from "../assets/images/birb.gif";

import { Link } from "react-router-dom";
import "../assets/styles/henlo.scss";

const About = () => (
  <div className="wrapper">
    <div className="headerNav">
      <img className="birb" src={birb} alt="I'm a birb yo!" />
      <div className="headerWrapper">
        <div className="navItem">
          <Link to="/about">React Router Magic</Link>
        </div>
        <div className="navItem">
          <a href="#">Link 2</a>
        </div>
        <div className="navItem">
          <a href="#">Link 3</a>
        </div>
        <div className="navItem">
          <a href="#">Link 4</a>
        </div>
      </div>
    </div>

    <div className="contentBox contentBoxAbout">
      <h2 className="header">WOO</h2>
      <div className="intro">
        <p>React router did it's magic and navigated you to the about page, check out the URL.</p>
      </div>
    </div>
    <div className="contentBox footer">
        <h2 className="header">birb footer</h2>
        <p className="content">I'm the footer!</p>
      </div>
  </div>
);

export default About;
