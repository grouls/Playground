import React, { Component } from "react";
import AddBirbForm          from "./AddBirbForm";
class AddInfoContainer extends Component {
  submit = values => this.props.addNewBirb(values);
  render() {
    return (
    <AddBirbForm onSubmit={this.submit} />
    );
  }
}

export default AddInfoContainer;
