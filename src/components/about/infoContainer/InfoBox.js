import React       from "react";
import Highlighter from "react-highlight-words";

const InfoBox = ({ value, type, searchwords }) => (
  <div className="infoBox">
    <div className="details">
      <p className={`infoText ${type}`}>{type}:</p>
      <p className={`infoDetails ${type}`}>
        <Highlighter highlightClassName="highlightDetails" searchWords={searchwords} autoEscape={true} textToHighlight={value} />
      </p>
    </div>
  </div>
);

export default InfoBox;
