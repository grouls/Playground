import React       from "react";
import Highlighter from "react-highlight-words";

const InfoBox = ({ value, type, activeFilter }) => (
  <div className="infoBox">
    <div className="details">
      <p className={`infoText ${type}`}>{type}:</p>
      <div className={`infoDetails ${type}`}>
        <Highlighter highlightClassName="highlightDetails" searchWords={[activeFilter]} autoEscape={true} textToHighlight={value} />
      </div>
    </div>
  </div>
);

export default InfoBox;
