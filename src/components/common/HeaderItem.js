import React from "react";
import "../../assets/styles/header.scss";
import { Link } from "react-router-dom";

const HeaderItem = ({ title, link }) => (
  <div className="navItem">
    <Link to={link}>{title}</Link>
  </div>
);

export default HeaderItem;
