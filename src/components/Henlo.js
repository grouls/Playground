import React       from "react";
import beerBirb    from "../assets/images/beerBirb.gif";
import react       from "../assets/images/react.png";
import redux       from "../assets/images/redux.png";
import cssGrid     from "../assets/images/cssgrid.png";
import reactRouter from "../assets/images/reactRouter.png";
import TechItem    from "./TechItem";
import { Link }    from "react-router-dom";

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

const techConfig = [
  {
    type: "react",
    text: "React",
    img: react
  },
  {
    type: "react_router",
    text: "React Router",
    img: reactRouter
  },
  {
    type: "redux",
    text: "Redux",
    img: redux
  },
  {
    type: "cssGrid",
    text: "CSS Grid",
    img: cssGrid
  }
];

const techRows = techConfig.map(item => ( <TechItem item={item} />));

const Henlo = ({showTheBirbs, displayBirbs}) => {

  const displayHelper = () => displayBirbs(!showTheBirbs);

  const birbDisplayText = showTheBirbs ? "Hide" : "Show";

  return (
    <div className="wrapper">
    
      <div className="contentBox contentBox_1">
        <h2 className="header">henlo</h2>
        <div className="intro">
          <p>Welcome to the JoeFads playground!</p>
          <p>
            Visit the<Link to="/tasks" style={styles.link}>Tasks</Link>
            page to get started.
          </p>
          <p>This was built from scratch to act as a lightweight example using: </p>
        </div>
        <div className="techContainer">
          {techRows}
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
          {showTheBirbs &&
            <div className="beerBirbContainer">
              <img src={beerBirb} className="beerBirb" alt="henlo you birb!" />
            </div>
          }
        </div>
      </div>
      
    </div>
  );
};

export default Henlo;
