import React from "react";
import { api } from "../rest/api";

import { Button } from "react-bootstrap";

export default class About extends React.Component {
  state = {
    about: [],
  };

  componentDidMount() {
    this.fetchAbout();
  }

  fetchAbout = async () => {
    const resources = await api.get();
    let about = null;

    for (let resource of resources) {
      if (resource.name === "About") {
        about = resource;
        break;
      }
    }

    if (about != null) {
      this.setState({ about });
    }
  };

  createAbout = async () => {
    const description = document.getElementById("about").value;
    await api.create({ name: "About", description: description });
    this.fetchAbout();
    document.getElementById("about").value = "";
  };

  editAbout = async () => {
    const description = document.getElementById("about").value;
    await api.put(
      { name: "About", description: description },
      this.state.about.id
    );
    this.fetchAbout();
    document.getElementById("about").valye = "";
  };

  handleCreateSubmit = (e) => {
    e.preventDefault();
    this.createAbout();
  };

  handleEditSubmit = (e) => {
    e.preventDefault();
    this.editAbout();
  };

  render() {
    return (
      <div>
        <h3>About Your Custom Aesthetic Candle</h3>
        <div className="center">
          <p>{this.state.about.description}</p>
        </div>
        <div className="center">
          <textarea id="about" rows="10" cols="100"></textarea>
          <br />
          <Button onClick={this.handleCreateSubmit}>Create</Button>
          <Button variant="warning" onClick={this.handleEditSubmit}>
            Edit
          </Button>
        </div>
      </div>
    );
  }
}
