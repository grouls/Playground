import React        from "react";
import InfoBox      from "./InfoBox";
import ImageInfoBox from "./ImageInfoBox";

const InfoContainer = ({ birb, searchwords }) => (
  <div className="birbInfoContainer">
    <ImageInfoBox type="user" value={birb.username} searchwords={searchwords} />
    <InfoBox type="name" value={birb.name} searchwords={searchwords} />
    <InfoBox type="phone" value={birb.phone} searchwords={searchwords} />
  </div>
);

export default InfoContainer;
