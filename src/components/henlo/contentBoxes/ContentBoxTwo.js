import React    from "react";
import beerBirb from '../../../assets/images/beerBirb.gif';
import Code     from '../code';

const ContentBoxTwo = ({ displayHelper, showCodeHelper, showCode, showTheBirbs }) => {
  const displayText = showTheBirbs ? "Hide" : "Show";
  return (
    <div className="contentBox contentBox_2">
      <div className="headerGrid">
        <h2 className="header">heck'n birbs</h2>
        <button className="showCodeButton" onClick={showCodeHelper}>
          JS
        </button>
      </div>
      {showCode ? (
        <Code />
      ) : (
        <>
          <div className="intro">
            <p>A simple hide / show example.</p>
            <button className="birbButton" onClick={displayHelper}>
              {displayText} birb!
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
  );
};

export default ContentBoxTwo;
