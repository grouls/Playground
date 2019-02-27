import React         from "react";
import TechContainer from "../../tech";
import Intro         from "../../../common/Intro";
import IntroText     from "./IntroText";
import Header        from "../../../common/Header";

const ContentBoxOne = () => (
  <div className="contentBox contentBox_1">
    <Header text="henlo"/>
    <Intro>
     <IntroText />
    </Intro>
    <TechContainer />
  </div>
);

export default ContentBoxOne;
