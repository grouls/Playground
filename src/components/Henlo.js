import React from "react";
import birb from "../assets/images/birb.gif";
import beerBirb from "../assets/images/beerBirb.gif";
import react from "../assets/images/react.png";
import redux from "../assets/images/redux.png";
import cssGrid from "../assets/images/cssgrid.png";
import reactRouter from "../assets/images/reactRouter.png";
import flowdiagram from "../assets/images/flowdiagram.png";

import { Link } from "react-router-dom";
import "../assets/styles/henlo.scss";

// An example of inline styles as a style object.
// CSS-in-JS is abstracts the CSS model to the component level,
// rather than the document level (modularity), there a some
// neat libraries to follow this pattern: JSS, Styled Components + more.

const styles = {
  link: {
    color: "goldenrod",
    "text-decoration": "none"
  }
};

const Henlo = props => {
  const displayHelper = () => {
    const showBirbs = !props.showTheBirbs;
    props.displayBirbs(showBirbs);
  };

  const birbDisplayText = props.showTheBirbs ? "Hide" : "Show";

  return (
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

      <div className="contentBox contentBox_1">
        <h2 className="header">henlo</h2>
        <div className="intro">
          <p>Welcome to the JoeFads playground!</p>
          <p>
            Visit the <Link to="/tasks" style={styles.link}>Tasks</Link> page to get started.
          </p>
          <p>This was built from scratch to act as a lightweight example using: </p>
        </div>
        <div className="techContainer">
          <div className="react techGrid">
            <img src={react} alt="redux" />
            <p>React</p>
          </div>
          <div className="react_router techGrid">
            <img src={reactRouter} alt="redux" />
            <p>React Router</p>
          </div>
          <div className="redux techGrid">
            <img src={redux} alt="redux" />
            <p>Redux</p>
          </div>
          <div className="redux techGrid">
            <img src={cssGrid} alt="redux" />
            <p>CSS Grid</p>
          </div>
        </div>
      </div>

      <div className="contentBox contentBox_2">
        <h2 className="header">heck'n birbs</h2>
        <div className="intro">
          <p>A simple hide / show example to demonstrate dispatching an action from a prop passed to this component, updating state and triggering component to render again.</p>
          <button className="birbButton" onClick={displayHelper}>
            {birbDisplayText} birb!
          </button>
        </div>
        <div className="imageContainer">
          {props.showTheBirbs ? (
            <div className="beerBirbContainer">
              <img src={beerBirb} className="beerBirb" alt="henlo you birb!" />
            </div>
          ) : null}
        </div>
      </div>
      <div className="contentBox footer">
        <h2 className="header">birb footer</h2>
        <p className="content">I'm the footer!</p>
      </div>
    </div>
  );
};

export default Henlo;
