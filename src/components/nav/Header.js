import React, { memo } from "react";
import birb from "../../assets/images/birb.gif";
import "../../assets/styles/header.scss";
import HeaderItem from "../common/HeaderItem";

const Header = memo(() => (
  <div className="headerNav">
    <img className="birb" src={birb} alt="I'm a birb yo!" />
    <div className="headerWrapper">
      <HeaderItem title="home" link="/home" />
      <HeaderItem title="about" link="/about" />
      <HeaderItem title="tasks" link="/tasks" />
      <HeaderItem title="resources" link="/resources" />
    </div>
  </div>
));

export default Header;
