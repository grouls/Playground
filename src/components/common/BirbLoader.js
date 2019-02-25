import React        from 'react';
import loadingBirb  from "../../assets/images/loading.gif";

const BirbLoader = () => (
    <div className="loadingContainer">
    <img className="loadingBirb" src={loadingBirb} alt="Loading The Birbs" />
    <p className="loadingBirbText">L O A D I N G</p>
  </div>
);

export default BirbLoader;