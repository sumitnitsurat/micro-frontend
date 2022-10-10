import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
const APP1_Button =
  React.lazy(() =>
    import('app1/Button')
  );

const App = () => (
  <div className="container">
    <div>Name: app2 HOST</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <React.Suspense fallback="loading...">
      <APP1_Button>app1 button working in app2</APP1_Button>
    </React.Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
