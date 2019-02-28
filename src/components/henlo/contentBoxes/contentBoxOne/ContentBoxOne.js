import React, { memo } from "react";
import TechContainer   from "../../tech";
import Intro           from "../../../common/Intro";
import IntroText       from "./IntroText";
import Header          from "../../../common/Header";
import VSCodeContainer from "../../extensions";

//memo to only render once - don't re-render on state changes
// If we wern't using memo, we would probably convert this to a class based component and add logic to shouldComponentUpdate.
const ContentBoxOne = memo(() => (
  <div className="contentBox contentBox_1">
    <Header text="henlo"/>
    <Intro>
     <IntroText />
    </Intro>
    <TechContainer />
    <VSCodeContainer />
  </div>
));

export default ContentBoxOne;
