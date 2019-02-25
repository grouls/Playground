import React        from 'react';
import loadingBirb  from "../../assets/images/loading.gif";

const BirbLoader = () => (
    <div className="loadingContainer">
    <img className="loadingBirb" src={loadingBirb} alt="Loading The Birbs" />
    <p className="loadingBirbText">loading</p>
  </div>
);

export default BirbLoader;