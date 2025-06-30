import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "green",
  fontSize: "30px",
  border: "2px solid black ",
};

customStyle.color = "aqua";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
