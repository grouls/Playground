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
    const searchwords = this.props.activeFilter.split(' ');
    return this.props.filteredBirbList.map(birb => (
      <div className="birbInfoContainer">
        <ImageInfoBox key={birb.username} type="user" value={birb.username} searchwords={searchwords} />
        <InfoBox key={birb.username} type="name" value={birb.name} searchwords={searchwords} />
        <InfoBox key={birb.username} type="phone" value={birb.phone} searchwords={searchwords} />
      </div>
    ));
  };
  
  filter = e => this.props.filterBirbList(this.props.birbList, e.target.value)

  render() {
    const birbRows = this.getRows();
    return (
      <div className="wrapper">
        <div className="contentBox contentBoxWide">
          <h2 className="header">about the birbs!</h2>
          {this.props.birbsLoadingStatus === "loading" ? (
            <div className="loadingContainer">
              <img className="loadingBirb" src={loadingBirb} alt="Loading The Birbs" />
              <p className="loadingBirbText">L O A D I N G</p>
            </div>
          ) : (
              <>
                <input className="filterInput" placeholder="...Type To Filter" onChange={this.filter} />
                <div className="aboutContainer">
                  {birbRows}
                </div>
              </>
            )}
        </div>
      </div>
    );
  }
}

export default About;
