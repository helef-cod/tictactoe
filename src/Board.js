import React, { Component } from "react";
import "./App.css";
import Statu from "./Statu.js";

class Board extends Component {
  state = {
    cira1: "",
    cirb1: "",
    circ1: "",
    cira2: "",
    cirb2: "",
    circ2: "",
    cira3: "",
    cirb3: "",
    circ3: "",
    idx: false,
    play: true,
  };
  shouldComponentUpdate() {
    if (this.state.play) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate() {
    const {
      cira1,
      cira2,
      cira3,
      cirb1,
      cirb2,
      cirb3,
      circ1,
      circ2,
      circ3,
    } = this.state;
    if (
      (cira1 === "cirw" && cirb1 === "cirw" && circ1 === "cirw") ||
      (cira2 === "cirw" && cirb2 === "cirw" && circ2 === "cirw") ||
      (cira3 === "cirw" && cirb3 === "cirw" && circ3 === "cirw") ||
      (cira1 === "cirw" && cira2 === "cirw" && cira3 === "cirw") ||
      (cirb1 === "cirw" && cirb2 === "cirw" && cirb3 === "cirw") ||
      (circ1 === "cirw" && circ2 === "cirw" && circ3 === "cirw") ||
      (cira1 === "cirw" && cirb2 === "cirw" && circ3 === "cirw") ||
      (cira3 === "cirw" && cirb2 === "cirw" && circ1 === "cirw") ||
      (cira1 === "cirb" && cirb1 === "cirb" && circ1 === "cirb") ||
      (cira2 === "cirb" && cirb2 === "cirb" && circ2 === "cirb") ||
      (cira3 === "cirb" && cirb3 === "cirb" && circ3 === "cirb") ||
      (cira1 === "cirb" && cira2 === "cirb" && cira3 === "cirb") ||
      (cirb1 === "cirb" && cirb2 === "cirb" && cirb3 === "cirb") ||
      (circ1 === "cirb" && circ2 === "cirb" && circ3 === "cirb") ||
      (cira1 === "cirb" && cirb2 === "cirb" && circ3 === "cirb") ||
      (cira3 === "cirb" && cirb2 === "cirb" && circ1 === "cirb")
    ) {
      this.setState({ play: false });
    }
  }

  changeColora1 = () => {
    if (!this.state.idx) {
      this.setState({ cira1: "cirw" });
    } else if (this.state.idx) {
      this.setState({ cira1: "cirb" });
    }
    this.setState({ idx: !this.state.idx });
  };
  changeColorb1 = () => {
    if (!this.state.idx) {
      this.setState({ cirb1: "cirw" });
    } else if (this.state.idx) {
      this.setState({ cirb1: "cirb" });
    }
    this.setState({ idx: !this.state.idx });
  };
  changeColorc1 = () => {
    if (!this.state.idx) {
      this.setState({ circ1: "cirw" });
    } else if (this.state.idx) {
      this.setState({ circ1: "cirb" });
    }
    this.setState({ idx: !this.state.idx });
  };
  changeColora2 = () => {
    if (!this.state.idx) {
      this.setState({ cira2: "cirw" });
    } else if (this.state.idx) {
      this.setState({ cira2: "cirb" });
    }
    this.setState({ idx: !this.state.idx });
  };
  changeColorb2 = () => {
    if (!this.state.idx) {
      this.setState({ cirb2: "cirw" });
    } else if (this.state.idx) {
      this.setState({ cirb2: "cirb" });
    }
    this.setState({ idx: !this.state.idx });
  };
  changeColorc2 = () => {
    if (!this.state.idx) {
      this.setState({ circ2: "cirw" });
    } else if (this.state.idx) {
      this.setState({ circ2: "cirb" });
    }
    this.setState({ idx: !this.state.idx });
  };
  changeColora3 = () => {
    if (!this.state.idx) {
      this.setState({ cira3: "cirw" });
    } else if (this.state.idx) {
      this.setState({ cira3: "cirb" });
    }
    this.setState({ idx: !this.state.idx });
  };
  changeColorb3 = () => {
    if (!this.state.idx) {
      this.setState({ cirb3: "cirw" });
    } else if (this.state.idx) {
      this.setState({ cirb3: "cirb" });
    }
    this.setState({ idx: !this.state.idx });
  };
  changeColorc3 = () => {
    if (!this.state.idx) {
      this.setState({ circ3: "cirw" });
    } else if (this.state.idx) {
      this.setState({ circ3: "cirb" });
    }
    this.setState({ idx: !this.state.idx });
  };
  clearTable = () => {
    this.setState({
      cira1: "",
      cira2: "",
      cira3: "",
      cirb1: "",
      cirb2: "",
      cirb3: "",
      circ1: "",
      circ2: "",
      circ3: "",
      play: true,
    });
  };

  render() {
    return (
      <div>
        <div className={this.state.idx ? "cirb" : "cirw"}></div>
        <br></br>
        <div id="board">
          <div id="row1">
            <h4>1</h4>
            <div className="odd" id="a1" onClick={this.changeColora1}>
              <div id={this.state.cira1}></div>
            </div>
            <div className="even" id="b1" onClick={this.changeColorb1}>
              <div id={this.state.cirb1}></div>
            </div>
            <div className="odd" id="c1" onClick={this.changeColorc1}>
              <div id={this.state.circ1}></div>
            </div>
          </div>
          <div id="row2">
            <h4>2</h4>
            <div className="even" id="a2" onClick={this.changeColora2}>
              <div id={this.state.cira2}></div>
            </div>
            <div className="odd" id="b2" onClick={this.changeColorb2}>
              <div id={this.state.cirb2}></div>
            </div>
            <div className="even" id="c2" onClick={this.changeColorc2}>
              <div id={this.state.circ2}></div>
            </div>
          </div>
          <div id="row3">
            <h4>3</h4>
            <div className="odd" id="a3" onClick={this.changeColora3}>
              <div id={this.state.cira3}></div>
            </div>
            <div className="even" id="b3" onClick={this.changeColorb3}>
              <div id={this.state.cirb3}></div>
            </div>
            <div className="odd" id="c3" onClick={this.changeColorc3}>
              <div id={this.state.circ3}></div>
            </div>
          </div>
          <div id="coordsA">
            <div>a</div>
            <div>b</div>
            <div>c</div>
          </div>
          <br />
          <button onClick={this.clearTable}>Clear Board</button>
          <Statu
            checkStatus={this.checkStatus}
            a1={this.state.cira1}
            a2={this.state.cira2}
            a3={this.state.cira3}
            b1={this.state.cirb1}
            b2={this.state.cirb2}
            b3={this.state.cirb3}
            c1={this.state.circ1}
            c2={this.state.circ2}
            c3={this.state.circ3}
          />
        </div>
      </div>
    );
  }
}

export default Board;
