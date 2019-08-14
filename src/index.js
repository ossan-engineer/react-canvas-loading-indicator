import React from "react";
import ReactDOM from "react-dom";
import Loading from "./Loading";

ReactDOM.render(
  <div>
    <Loading size={100} />
    <Loading size={200} color="skyblue" />
    <Loading size={300} color="lightgreen" />
  </div>,
  document.getElementById("root")
);
