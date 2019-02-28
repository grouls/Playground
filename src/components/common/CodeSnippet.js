import React from "react";

const CodeSnippet = ({ code }) => (
  <div className="codeContainer">
    <pre>
      <code className="language-javascript">{code}</code>
    </pre>
  </div>
);

export default CodeSnippet;
