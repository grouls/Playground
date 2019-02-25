import React       from "react";
import Highlighter from "react-highlight-words";
import mrBirb      from "../../../assets/images/mrBirb.jpg";

const UsernameInfoBox = ({type, value, searchwords}) => (
  <div className="infoBox">
    <div className="usernameDetails">
      <img className="mrBirb" src={mrBirb} alt="I'm a birb yo!" />
      <p className={`infoText ${type}`}>{type}:</p>
      <div className={`infoDetails ${type}`}>
        <Highlighter highlightClassName="highlightDetails" searchWords={searchwords} autoEscape={true} textToHighlight={value} />
      </div>
    </div>
  </div>
);

export default UsernameInfoBox;
