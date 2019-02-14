import React, { Component } from "react";
import { Link } from "react-router-dom";
import birb from "../assets/images/birb.gif";
import loadingBirb from "../assets/images/loading.gif";
import mrBirb from "../assets/images/mrBirb.jpg";
import "../assets/styles/henlo.scss";

class About extends Component {
  componentDidMount() {
    if (this.props.birbsLoadingStatus !== "loaded" && !this.props.birbList.length) {
      this.props.getTheBirbs();
    }
  }

  getRows = () => {
    return this.props.birbList.map(birb => (
      <div className="birbInfoContainer">
        <div className="infoBox">
          <div className="usernameDetails">
            <img className="mrBirb" src={mrBirb} alt="I'm a birb yo!" />
            <p className="infoText username">User:</p>
            <p className="infoDetails username">{birb.username}</p>
          </div>
        </div>
        <div className="infoBox">
          <div className="details">
            <p className="infoText name">Name:</p>
            <p className="infoDetails name">{birb.name}</p>
          </div>
        </div>
        <div className="infoBox">
          <div className="details">
            <p className="infoText phone">Phone:</p>
            <p className="infoDetails phone">{birb.phone}</p>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    const birbRows = this.getRows();
    return (
      <div className="wrapper">
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

        <div className="contentBox contentBoxWide">
          <h2 className="header">about the birbs!</h2>
          <div className="loadingContainer">
            {this.props.birbsLoadingStatus === "loading" ? (
              <>
                <img className="loadingBirb" src={loadingBirb} alt="Loading The Birbs" />
                <p className="loadingBirbText">L O A D I N G</p>
              </>
            ) : (
              birbRows
            )}
          </div>
        </div>
        <div className="contentBox footer">
          <h2 className="header">birb footer</h2>
          <p className="content">I'm the footer!</p>
        </div>
      </div>
    );
  }
}

export default About;
