import React, { Component } from "react";

// import logo from "./logo.svg";
import "./App.scss";

import NavBar from "./components/navbar";

import Calculator from "./components/calculator/Calculator";
import CityList from "./components/foodlist/CityList";
import Test from "./components/test/test";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar totalCounters={6} />
          <Route exact path="/">
            <Redirect to="/calculator" />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/city-list">
            <CityList />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
