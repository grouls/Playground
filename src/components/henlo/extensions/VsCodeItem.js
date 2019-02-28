import React from "react";
import vscode from "../../../assets/images/vscode.png";

const VsCodeItem = ({ item }) => (
  <div className="extensionGridContainer">
    <p>
      <span className="extensionInfo">Name: </span>
      {item.name}
    </p>
    <p>
      <span className="extensionInfo">Description: </span>
      {item.description}
    </p>
    <div className="vscodeGrid">
      <p className="extensionInfo">Marketplace: </p>
      <a className="fade vscode" href={item.link} target="_blank" rel="noopener noreferrer">
        <img src={vscode} alt="vscode" />
      </a>
    </div>
  </div>
);

export default VsCodeItem;
