import React                from "react";
import VsCodeItem           from "./VsCodeItem";
import { extensionsConfig }  from "../config";
import Header               from "../../common/Header";
const extensionRows = extensionsConfig.map(item => <VsCodeItem key={item.id} item={item} />);

const VSCodeContainer = () => (
  <>
    <Header text="My Favourite VS Code Extensions"></Header>
    <div className="vsCodeContainer">{extensionRows}</div>
  </>
);

export default VSCodeContainer;
