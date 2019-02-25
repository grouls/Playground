import React, { Component } from "react";
import { code } from "./config";
import Prism from "prismjs";
import "../../assets/styles/prism.css";
import { SHOW_THE_BIRBS } from '../../redux/actions/actionTypes';

class Code extends Component {

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <>
        <div className="intro">
          <p>The displayHelper arrow fn calls the destructured displayBirbs(fn) prop with an inverted boolean value using the showTheBirbs(boolean) prop.</p>
        </div>
        <div className="codeContainer">
          <pre>
            <code className="language-javascript">{code.part_one}</code>
          </pre>
        </div>
        <div className="intro">
          <p>The displayBirbs action is dispatched with the action type as SHOW_THE_BIRBS along with the inverted boolean value.</p>
        </div>
        <div className="codeContainer">
          <pre>
            <code className="language-javascript">{code.part_two}</code>
          </pre>
        </div>
        <div className="intro">
          <p>some deets</p>
        </div>
        <div className="codeContainer">
          <pre>
            <code className="language-javascript">{code.part_three}</code>
          </pre>
        </div>
      </>
    );
  }
}

export default Code;
