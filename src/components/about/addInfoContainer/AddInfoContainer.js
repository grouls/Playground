import React from "react";

const AddInfoContainer = () => (
  <div className="addInfoContainerGrid">
    <div className="addInfoGrid">
      <p>user: </p>
      <input className="filterInput" />
    </div>
    <div className="addInfoGrid">
      <p>name: </p>
      <input className="filterInput" />
    </div>
    <div className="addInfoGrid">
      <p>phone: </p>
      <input className="filterInput" />
    </div>
    <button className="addInfoBtn">Add</button>
  </div>
);

export default AddInfoContainer;
