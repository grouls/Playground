import React          from "react";
import TechItem       from "./TechItem";
import { techConfig }  from "../config";

const techRows = techConfig.map(item => <TechItem key={item.type} item={item} />);

const TechContainer = () => <div className="techContainer">{techRows}</div>;

export default TechContainer;
