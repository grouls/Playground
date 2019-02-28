import React, { Component } from "react";
import Prism                from "prismjs";
import dev_tools            from "../../../assets/images/redux_dev_tools.png";
import CodeItem             from "../../common/CodeItem";
import { codeConfig }        from "../config";
import Intro                from "../../common/Intro";
import {devToolsText}       from "../config";

class Code extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  getItems = () => codeConfig.map(({ id, text, code, src }) => 
    <CodeItem key={id} text={text} code={code} src={src} />);

  render() {
    return (
      <>
        {this.getItems()}
        <Intro>
          <p>{devToolsText}/</p>
        </Intro>
        <div className="codeContainer">
          <img src={dev_tools} className="dev_tools" alt="dev tools" />
        </div>
      </>
    );
  }
}

export default Code;
