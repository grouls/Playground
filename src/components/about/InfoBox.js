import React from "react";

const InfoBox = ({ value, type }) => (
  <div className="infoBox">
    <div className="details">
      <p className={`infoText ${type}`}>{type}:</p>
      <p className={`infoDetails ${type}`}>{value}</p>
    </div>
  </div>
);

export default InfoBox;
