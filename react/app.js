import React from "react";
import ReactDOM from "react-dom";

import { Counter } from "./Counter";
import { LiveCode } from "./LiveCode";

window.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Counter />, document.getElementById("counter"));
  ReactDOM.render(<LiveCode />, document.getElementById("liveData"));
});
