import React, { Component } from "react";
import BirbLoader           from "../common/BirbLoader";
import InfoContainer        from "./infoContainer";
import AddInfoContainer     from './addInfoContainer';
import "../../assets/styles/about.scss";

class About extends Component {
  componentDidMount() {
    if (this.props.birbsLoadingStatus !== "loaded" && !this.props.birbList.length) {
      this.props.getTheBirbs();
    }
  }

  getRows = () => {
    const searchwords = this.props.activeFilter.split(" ");
    return this.props.filteredBirbList.map(birb => (
      <InfoContainer key={birb.username} birb={birb} searchwords={searchwords}/>
    ));
  };
  
  addBirb = () => this.props.updateShowAddBirb(!this.props.showAddBirb);

  filter = e => this.props.filterBirbList(this.props.birbList, e.target.value);

  render() {
    const birbRows = this.getRows();
    const displayText = this.props.showAddBirb ? '-' : '+';
    return (
      <div className="wrapper">
        <div className="contentBox contentBoxWide">
        <div className="headerGrid">
          <h2 className="header">about the birbs!</h2>
          <button className="addBirbButton" onClick={this.addBirb}>{displayText}</button>
        </div>
          {this.props.birbsLoadingStatus === "loading" ? (
          <BirbLoader />
          ) : (
            this.props.showAddBirb ? 
            <AddInfoContainer />
            :
            <>
              <input className="filterInput" placeholder="\/^v^\/" onChange={this.filter} />
              <div className="aboutContainer">{birbRows}</div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default About;
