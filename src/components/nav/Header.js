import React   from 'react';
import {Link } from 'react-router-dom';
import birb    from "../../assets/images/birb.gif";

const Header = () => (
    <div className="headerNav">
    <img className="birb" src={birb} alt="I'm a birb yo!" />
    <div className="headerWrapper">
      <div className="navItem">
        <Link to="/home">Home</Link>
      </div>
      <div className="navItem">
        <Link to="/about">About</Link>
      </div>
      <div className="navItem">
        <Link to="/tasks">Tasks</Link>
      </div>
      <div className="navItem">
        <a href="#">Link 4</a>
      </div>
    </div>
  </div>
)

export default Header;