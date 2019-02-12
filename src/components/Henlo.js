import React       from "react";
import birb        from "../assets/images/birb.gif";
import beerBirb    from "../assets/images/beerBirb.gif";
import react       from "../assets/images/react.png";
import redux       from "../assets/images/redux.png";
import cssGrid     from "../assets/images/cssgrid.png";
import reactRouter from "../assets/images/reactRouter.png";

import { Link } from "react-router-dom";
import "../assets/styles/henlo.scss";

const Henlo = (props) => {
  
  const displayHelper = () => {
    const showBirbs = !props.showTheBirbs;
    props.displayBirbs(showBirbs);
  }
  
  const birbDisplayText = props.showTheBirbs ? 'Hide' : 'Show';

  return (
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
      <div className="contentBox contentBox_1">
        <h2 className="header">henlo</h2>
        <div className="intro">
          <p>Welcome to the JoeFads playground!</p>
          <p>This was built from scratch to act as a lightweight example using: </p>
        </div>
        <div className="tools">
        <div className="react">
            <img src={react} alt="redux" />
            <p>React</p>
          </div>
          <div className="react_router">
            <img src={reactRouter} alt="redux" />
            <p>React Router</p>
          </div>
          <div className="redux">
            <img src={redux} alt="redux" />
            <p>Redux</p>
          </div>
          <div className="redux">
            <img src={cssGrid} alt="redux" />
            <p>CSS Grid</p>
          </div>
        </div>
      </div>
      <div className="contentBox contentBox_2">
        <h2 className="header">heck'n birbs</h2>
        <div className="intro">
          <button className="birbButton" onClick={displayHelper}>{birbDisplayText} the birb!</button>
        </div>
        { props.showTheBirbs ? 
        <div className="birbPics">
          <img src={beerBirb} className="bigBirb" alt="henlo you birb!" />
        </div> : null 
        }
      </div>
      <div className="contentBox footer">
        <h2 className="header">birb footer</h2>
        <p className="content">I'm the footer!</p>
      </div>
    </div>
  );
};

export default Henlo;
