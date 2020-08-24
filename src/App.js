import React, { Component } from "react";
import "./App.css";
import Board from "./Board.js";
class App extends Component {
  render() {
    return (
      <div className="main">
        <h3>TIC TAC TOE</h3>
        <Board />
      </div>
    );
  }
}

export default App;
