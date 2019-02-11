import React from "react";
import birb from "../assets/images/birb.gif";
import { Link } from "react-router-dom";
import "../assets/styles/henlo.scss";

const Henlo = () => {
  return (
    <div className="wrapper">
      <div className="headerNav">
        <img className="birb" src={birb} alt="I'm a birb yo!" />
        <span className="navItem_1">
          <Link to="/about">React Router Magic</Link>
        </span>
        <span className="navItem_2">
           Link 2
        </span>
        <span className="navItem_3">
           Link 3
        </span>
        <span className="navItem_4">
           Link 4
        </span>
      </div>
      <div className="contentBox_1">
        <p className="header">henlo</p>
        <p className="content">Welcome to the JoeFads playground!</p>
      </div>
      <div className="contentBox_2">
        <p className="header">heck'n birb info</p>
        <p className="content">All things birbs!</p>
      </div>
      <div className="footer">
        <p className="header">birb footer</p>
        <p className="content">I'm the footer!</p>
      </div>
    </div>
  );
};

export default Henlo;
