import React from "react";
import Intro from "./Intro";

const CodeItem = ({ text = "", code = "", src = "" }) => (
  <>
    <Intro>
      <p>{text}</p>
    </Intro>
    <div className="codeContainer">
      <pre>
        <code className="language-javascript">{code}</code>
      </pre>
    </div>
    {src && (
      <Intro>
        <p className="codeSource">Src : '{src}'</p>
      </Intro>
    )}
  </>
);

export default CodeItem;
