import React, { Component } from "react";
import BirbLoader from "../common/BirbLoader";
import InfoContainer from "./infoContainer";
import AddInfoContainer from "./addInfoContainer";
import Intro from "../common/Intro";
import { fetchURL, asyncURL } from "./config";
import "../../assets/styles/about.scss";

class About extends Component {
  componentDidMount() {
    if (this.props.birbsLoadingStatus !== "loaded" && !this.props.birbList.length) {
      this.props.getTheBirbs();
    }
  }

  getRows = () => {
    const searchwords = this.props.activeFilter.split(" ");
    return this.props.filteredBirbList.map(birb => <InfoContainer key={birb.username} birb={birb} searchwords={searchwords} />);
  };

  addNewBirb = values => {
    // create a new array that joins old list with new birb object - wrapped in an array.
    const birbs = [...this.props.birbList, ...[values]];
    this.props.addNewBirb(birbs);
  };

  addBirb = () => this.props.updateShowAddBirb(!this.props.showAddBirb);

  filter = e => this.props.filterBirbList(this.props.birbList, e.target.value);

  render() {
    const birbRows = this.getRows();
    const displayText = this.props.showAddBirb ? "-" : "+";

    if (this.props.birbsLoadingStatus === "loading") {
      return (
        <div className="wrapper">
          <div className="contentBox contentBoxLoader">
            <div className="headerGrid">
              <h2 className="header">about the birbs!</h2>
              <button className="addBirbButton" onClick={this.addBirb}>
                {displayText}
              </button>
            </div>
            <BirbLoader />
          </div>
        </div>
      );
    }

    if (this.props.showAddBirb) {
      return (
        <div className="wrapper">
          <div className="contentBox contentBoxLoader">
            <div className="headerGrid">
              <h2 className="header">about the birbs!</h2>
              <button className="addBirbButton" onClick={this.addBirb}>
                {displayText}
              </button>
            </div>
            <AddInfoContainer addNewBirb={this.addNewBirb} />
          </div>
        </div>
      );
    }

    return (
      <div className="wrapper">
        <div className="contentBox contentBoxWide">
          <div className="headerGrid">
            <h2 className="header">about the birbs!</h2>
            <button className="addBirbButton" onClick={this.addBirb}>
              {displayText}
            </button>
          </div>
          <>
            <div className="introContainer">
              <Intro>
                <p>
                  A simple example to showcase using
                  <a className="fetchURL" href={fetchURL} target="_blank" rel="noopener noreferrer">
                    {" "}
                    Fetch{" "}
                  </a>
                  in an action with
                  <a className="fetchURL" href={asyncURL} target="_blank" rel="noopener noreferrer">
                    {" "}
                    Async/Await
                  </a>
                  . Dispatching actions to store the json response & update the loading status before the reducer updates our store.
                </p>
                <p>
                  The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a promise that resolves to the response to that request, whether it is
                  successful or not. You can also optionally pass in an init options object as the second argument.{" "}
                </p>
                <p>I've also added some filtering, check out the filter actions too!</p>
              </Intro>
            </div>
            <input className="filterInput" placeholder="\/^v^\/" onChange={this.filter} />
            <div className="aboutContainer">{birbRows}</div>
          </>
        </div>
      </div>
    );
  }
}

export default About;
