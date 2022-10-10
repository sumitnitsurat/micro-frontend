import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: app1</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Button>MFE 1 </Button>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
