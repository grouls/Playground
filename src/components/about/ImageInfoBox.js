import React  from "react";
import mrBirb from "../../assets/images/mrBirb.jpg";

const UsernameInfoBox = ({type, value}) => (
  <div className="infoBox">
    <div className="usernameDetails">
      <img className="mrBirb" src={mrBirb} alt="I'm a birb yo!" />
      <p className={`infoText ${type}`}>{type}:</p>
      <p className={`infoDetails ${type}`}>{value}</p>
    </div>
  </div>
);

export default UsernameInfoBox;
