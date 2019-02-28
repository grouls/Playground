import React from "react";
import Intro from "./Intro";
import CodeSnippet from "./CodeSnippet";

const CodeItem = ({ text = "", code = "", src = "" }) => (
  <>
    <Intro>
      <p>{text}</p>
    </Intro>
    <CodeSnippet code={code} />
    {src && (
      <Intro>
        <p className="codeSource">Src : '{src}'</p>
      </Intro>
    )}
  </>
);

export default CodeItem;
