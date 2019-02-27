import React         from "react";
import { resources } from "./config";
import ResourceItem  from "./ResourceItem";
import "../../assets/styles/resources.scss";

const items = resources.map(r => <ResourceItem key={r.id} name={r.name} url={r.url} keyword={r.keyword} />);

const Resources = () => (
  <div className="wrapper">
    <div className="contentBox">
      <h2 className="header">Resources</h2>
      {items}
    </div>
  </div>
);

export default Resources;
