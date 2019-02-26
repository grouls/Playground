import React from "react";

const CodeItem = ({ text, code, src }) => (
  <>
    <div className="intro">
      <p>{text}</p>
    </div>
    <div className="codeContainer">
      <pre>
        <code className="language-javascript">{code}</code>
      </pre>
    </div>
    <div className="intro">
      <p className="codeSource">{src}</p>
    </div>
  </>
);

export default CodeItem;
