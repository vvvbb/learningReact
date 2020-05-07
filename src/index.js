import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";
import Test from "./components/test1";

ReactDOM.render(
  <React.StrictMode>
    <Test />
    <Counters />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
const element = <h1>Hellow from a h1 tag</h1>;
console.log(element);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
