import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.scss";

import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Greeting from "./components/Greeting";
// import ButtonTry from "./components/ButtonTry";
import CounterFunction from "./components/CounterFunction";
import CounterFunctionStronger from "./components/CounterFunctionStronger";
import PersonList from "./components/PersonList";
import Form from "./components/Form";

import ManageEvent from "./components/ManageEvent";

import Calculator from "./components/calculator/Calculator"
import CityList from "./components/foodlist/CityList"

// import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 1 },
      { id: 4, value: 0 },
    ],
  };
  handleIncrement = (counter) => {
    // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    // console.log(this.state.counters[index]);
    this.setState({ counters });
  };
  handleDecrease = (counter) => {
    // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    // console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <Router>
        <NavBar
          totalCounters={
            this.state.counters.filter((c) => c.value !== 0).length
          }
        />
          <Route exact path="/">
              <ManageEvent />
            <Greeting greeting={{ text: "Hello" }} />
            <CounterFunction />
            <CounterFunctionStronger amount={11} inc={4} dec={7} />

            <section className="container">
              <Counters
                counters={this.state.counters}
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDecrease={this.handleDecrease}
                onDelete={this.handleDelete}
              />
            </section>

            <PersonList />
            <Form />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/city-list">
            <CityList />
          </Route>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
