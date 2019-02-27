import React          from "react";
import beerBirb       from "../../../../assets/images/beerBirb.gif";
import Code           from "../../code";
import Intro          from "../../../common/Intro";
import { actionText } from "../../config";
import Header         from "../../../common/Header";

const ContentBoxTwo = ({ displayHelper, showCodeHelper, showCode, showTheBirbs }) => {
  const displayText = showTheBirbs ? "Hide" : "Show";
  return (
    <div className="contentBox contentBox_2">
      <Header text="heck'n birbs">
        <button className="showCodeButton" onClick={showCodeHelper}>
          JS
        </button>
      </Header>
      {showCode ? (
        <Code />
      ) : (
        <>
          <Intro>
            <p>{actionText}</p>
            <button className="birbButton" onClick={displayHelper}>
              {displayText} birb!
            </button>
          </Intro>
          {showTheBirbs && (
            <div className="beerBirbContainer">
              <img src={beerBirb} className="beerBirb" alt="beer" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ContentBoxTwo;
