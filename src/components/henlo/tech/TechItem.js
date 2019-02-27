import React from "react";

const TechItem = ({ item }) => (
  <div className={`${item.type} techGrid`}>
    <a className="fade" href={item.url} target="_blank" rel="noopener noreferrer">
      <img src={item.img} alt={item.type} />
    </a>
    <p>{item.text}</p>
  </div>
);

export default TechItem;
