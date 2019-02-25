import React from "react";
import beerBirb from "../../assets/images/beerBirb.gif";
import { Link } from "react-router-dom";
import TechContainer from "./TechContainer";
import Code from "./Code";
import "../../assets/styles/henlo.scss";

const url = "https://github.com/joefads/Playground";

const Henlo = ({ showTheBirbs, showHenloCode, displayBirbs, showCode }) => {
  const displayHelper   = () => displayBirbs(!showTheBirbs);
  const showCodeHelper  = () => showHenloCode(!showCode);
  const birbDisplayText = showTheBirbs ? "Hide" : "Show";

  return (
    <div className="henloWrapper">
      <div className="contentBox contentBox_1">
        <h2 className="header">henlo</h2>
        <div className="intro">
          <p>
            Welcome to the{" "}
            <a href={url} target="_blank" rel="noopener noreferrer">
              JoeFads
            </a>{" "}
            playground!
          </p>
          <p>
            Visit the<Link to="/tasks"> Tasks </Link> page to get started.
          </p>
          <p>This was built from scratch to act as a lightweight example using: </p>
        </div>
        <TechContainer />
      </div>

      <div className="contentBox contentBox_2">
        <button className="showCodeButton" onClick={showCodeHelper}>
         JS
        </button>
        {showCode ? (
          <Code />
        ) : (
          <>
            <h2 className="header">heck'n birbs</h2>
            <div className="intro">
              <p>A simple hide / show example.</p>
              <button className="birbButton" onClick={displayHelper}>
                {birbDisplayText} birb!
              </button>
            </div>
            <div className="imageContainer">
              {showTheBirbs && (
                <div className="beerBirbContainer">
                  <img src={beerBirb} className="beerBirb" alt="henlo you birb!" />
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Henlo;
