import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/henlo.scss";
import birb from "../assets/images/birb.gif";

const Tasks = () => (
  <div className="wrapper">
    <div className="headerNav">
      <img className="birb" src={birb} alt="I'm a birb yo!" />
      <div className="headerWrapper">
        <div className="navItem">
          <Link to="/home">Home</Link>
        </div>
        <div className="navItem">
          <Link to="/about">About</Link>
        </div>
        <div className="navItem">
          <Link to="/tasks">Tasks</Link>
        </div>
        <div className="navItem">
          <a href="#">Link 4</a>
        </div>
      </div>
    </div>

    <div className="contentBox contentBoxWide">
      <h2 className="header">Birb Tasks</h2>
      <p style={{ "margin-left": "5px" }}>
        <span role="img" aria-label="sheep">
          🐦
        </span>
        TASK 1
      </p>
      <p style={{ "margin-left": "5px" }}>
        <span role="img" aria-label="sheep">
          🐦
        </span>
        TASK 2
      </p>
      <p style={{ "margin-left": "5px" }}>
        <span role="img" aria-label="sheep">
          🐦
        </span>
        TASK 3
      </p>
      <p style={{ "margin-left": "5px" }}>
        <span role="img" aria-label="sheep">
          🐦
        </span>
        Turn these tasks into a checkable task list.
      </p>
    </div>

    <div className="contentBox footer">
      <h2 className="header">birb footer</h2>
      <p className="content">I'm the footer!</p>
    </div>
  </div>
);

export default Tasks;
