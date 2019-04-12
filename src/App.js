import React, { Component } from "react";
import "./App.css";
import Backlog from "./components/Backlog";
import ToDo from "./components/ToDo";
import InProgress from "./components/InProgress";
import Completed from "./components/Completed";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Backlog handleEdit={this.handleEdit} edit={this.state.blAdd} />
        <ToDo />
        <InProgress />
        <Completed />
      </div>
    );
  }
}

export default App;
