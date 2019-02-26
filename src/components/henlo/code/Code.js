import React, { Component } from "react";
import { codeConfig }        from "../config";
import Prism                from "prismjs";
import dev_tools            from "../../../assets/images/redux_dev_tools.png";
import CodeItem             from "./CodeItem";

class Code extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  getItems = () => codeConfig.map(({ text, code, src }) => <CodeItem text={text} code={code} src={src} />);

  render() {
    return (
      <>
        {this.getItems()}
        <div className="intro">
          <p>If you check your redux dev tools you will see the SHOW_THE_BIRBS action, along with the store changes caused by the henlo reducer.</p>
        </div>
        <div className="codeContainer">
          <img src={dev_tools} className="dev_tools" alt="dev tools" />
        </div>
      </>
    );
  }
}

export default Code;
