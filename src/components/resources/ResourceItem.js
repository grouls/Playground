import React from "react";
  
const ResourceItem = ({ name, url }) => (
  <div className="resourceItemContainer">
    <p className="resourceName">{name} </p>
    <p className="resourceUrl"><a href={url}>{url}</a></p>
  </div>
);

export default ResourceItem;
