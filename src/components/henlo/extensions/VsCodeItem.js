import React from "react";

const VsCodeItem = ({ item }) => (
  <div className="extensionGridContainer">
    <p><span className="extensionInfo">Name: </span>{item.name}</p>
    <p><span className="extensionInfo">Description: </span>{item.description}</p>
    <p><span className="extensionInfo">Link: </span><a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a></p>
  </div>
);

export default VsCodeItem;
