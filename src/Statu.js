import React, { Component } from "react";

class Statu extends Component {
  render() {
    var { a1, a2, a3, b1, b2, b3, c1, c2, c3 } = this.props;

    var statub = "";

    if (a1 === "cirb" && a2 === "cirb" && a3 === "cirb") {
      statub = "BLACK WINS!";
    } else if (b1 === "cirb" && b2 === "cirb" && b3 === "cirb") {
      statub = "BLACK WINS!";
    } else if (c1 === "cirb" && c2 === "cirb" && c3 === "cirb") {
      statub = "BLACK WINS!";
    } else if (a1 === "cirb" && b1 === "cirb" && c1 === "cirb") {
      statub = "BLACK WINS!";
    } else if (a2 === "cirb" && b2 === "cirb" && c2 === "cirb") {
      statub = "BLACK WINS!";
    } else if (a3 === "cirb" && b3 === "cirb" && c3 === "cirb") {
      statub = "BLACK WINS!";
    } else if (a1 === "cirb" && b2 === "cirb" && c3 === "cirb") {
      statub = "BLACK WINS!";
    } else if (a3 === "cirb" && b2 === "cirb" && c1 === "cirb") {
      statub = "BLACK WINS!";
    }
    var statuw = "";
    if (a1 === "cirw" && a2 === "cirw" && a3 === "cirw") {
      statuw = "WHITE WINS!";
    } else if (b1 === "cirw" && b2 === "cirw" && b3 === "cirw") {
      statuw = "WHITE WINS!";
    } else if (c1 === "cirw" && c2 === "cirw" && c3 === "cirw") {
      statuw = "WHITE WINS!";
    } else if (a1 === "cirw" && b1 === "cirw" && c1 === "cirw") {
      statuw = "WHITE WINS!";
    } else if (a2 === "cirw" && b2 === "cirw" && c2 === "cirw") {
      statuw = "WHITE WINS!";
    } else if (a3 === "cirw" && b3 === "cirw" && c3 === "cirw") {
      statuw = "WHITE WINS!";
    } else if (a1 === "cirw" && b2 === "cirw" && c3 === "cirw") {
      statuw = "WHITE WINS!";
    } else if (a3 === "cirw" && b2 === "cirw" && c1 === "cirw") {
      statuw = "WHITE WINS!";
    }
    return (
      <div>
        <h3>
          {statuw} {statub}
        </h3>
      </div>
    );
  }
}

export default Statu;
