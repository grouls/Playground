import React from "react";
import birb from "../assets/images/birb.gif";
import { Link } from "react-router-dom";
import "../assets/styles/henlo.scss";

const Henlo = () => {
  return (
    <div className="wrapper">
      <div className="headerNav">
        <img className="birb" src={birb} alt="I'm a birb yo!" />
        <div className="headerWrapper">
          <div className="navItem">
            <Link to="/about">React Router Magic</Link>
          </div>
          <div className="navItem"><a href="#">Link 2</a></div>
          <div className="navItem"><a href="#">Link 3</a></div>
          <div className="navItem"><a href="#">Link 4</a></div>
        </div>
      </div>
      <div className="contentBox contentBox_1">
        <p className="header">henlo</p>
        <p className="content">Welcome to the JoeFads playground!</p>
      </div>
      <div className="contentBox contentBox_2">
        <p className="header">heck'n birb info</p>
        <p className="content">All things birbs!</p>
      </div>
      <div className="contentBox footer">
        <p className="header">birb footer</p>
        <p className="content">I'm the footer!</p>
      </div>
    </div>
  );
};

export default Henlo;
