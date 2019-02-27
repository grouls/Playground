import React from "react";

const Header = ({ text, children }) => (
  <div className="headerGrid">
    <h2 className="header">{text}</h2>
    {children}
  </div>
);

export default Header;
