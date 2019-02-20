import React, { Component } from "react";
import loadingBirb          from "../../assets/images/loading.gif";
import InfoBox              from "./InfoBox";
import ImageInfoBox         from "./ImageInfoBox";
import "../../assets/styles/about.scss";

class About extends Component {
  componentDidMount() {
    if (this.props.birbsLoadingStatus !== "loaded" && !this.props.birbList.length) {
      this.props.getTheBirbs();
    }
  }
  getRows = () => {
    return this.props.birbList.map(birb => (
      <div className="birbInfoContainer">
        <ImageInfoBox type="user" value={birb.username} />
        <InfoBox type="name" value={birb.name} />
        <InfoBox type="phone" value={birb.phone} />
      </div>
    ));
  };

  render() {
    const birbRows = this.getRows();
    return (
      <div className="wrapper">
        <div className="contentBox contentBoxWide">
          <h2 className="header">about the birbs!</h2>
            {this.props.birbsLoadingStatus === "loading" || true ? (
              <div className="loadingContainer">
                <img className="loadingBirb" src={loadingBirb} alt="Loading The Birbs" />
                <p className="loadingBirbText">L O A D I N G</p>
              </div>
            ) : (
              <div className="aboutContainer">
              {birbRows}
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default About;
