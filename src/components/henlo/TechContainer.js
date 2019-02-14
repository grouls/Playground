import React       from "react";
import react       from "../../assets/images/react.png";
import redux       from "../../assets/images/redux.png";
import cssGrid     from "../../assets/images/cssgrid.png";
import reactRouter from "../../assets/images/reactRouter.png";
import TechItem    from "./TechItem";

const techConfig = [
  {
    type: "react",
    text: "React",
    img: react
  },
  {
    type: "react_router",
    text: "React Router",
    img: reactRouter
  },
  {
    type: "redux",
    text: "Redux",
    img: redux
  },
  {
    type: "cssGrid",
    text: "CSS Grid",
    img: cssGrid
  }
];

const techRows = techConfig.map(item => <TechItem item={item} />);

const TechContainer = () => <div className="techContainer">{techRows}</div>;

export default TechContainer;
