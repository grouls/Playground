import React from "react";
  
const ResourceItem = ({ name, url }) => (
  <div className="resourceItemContainer">
    <p className="resourceName">{name} </p>
    <p className="resourceUrl"><a href={url} target='_blank' rel="noopener noreferrer">{url}</a></p>
  </div>
);

export default ResourceItem;
