import React, { Component } from "react";

import Counters from "./counters";
import Greeting from "./Greeting";
// import ButtonTry from "./ButtonTry";
import CounterFunction from "./CounterFunction";
import CounterFunctionStronger from "./CounterFunctionStronger";
import FunctionCounter from "./FunctionCounter";
import ReduxCounter from "./ReduxProject/App";
import PersonList from "./PersonList";
import Form from "./Form";
import Test from "./test1";
import Fetch from "./Fetch";

import ManageEvent from "./ManageEvent";

export default class test extends Component {
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
      <section className="container-fluid">
        <div className="row">
          <div className="col border d-flex justify-content-center align-items-center">
            <ManageEvent />
          </div>
          <div className="col border ">
            <Greeting
              greeting={{
                text: `Hello : ${
                  this.state.counters.filter((c) => c.value !== 0).length
                }`,
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col border ">
            <CounterFunction />
          </div>
          <div className="col border d-flex justify-content-center align-items-center">
            empty cell
          </div>
        </div>
        <div className="row">
          <div className="col-4 border d-flex flex-column justify-content-center align-items-center">
            <h6>class counter</h6>
            <CounterFunctionStronger amount={11} inc={4} dec={7} />
          </div>
          <div className="col-4 border d-flex flex-column justify-content-center align-items-center">
            <h6>function counter</h6>
            <FunctionCounter />
          </div>
          <div className="col-4 border d-flex flex-column justify-content-center align-items-center">
            <h6>redux counter</h6>
            <ReduxCounter />
          </div>
        </div>
        <div className="row">
          <div className="col border d-flex justify-content-center align-items-center">
            <Form />
          </div>
          <div className="col border d-flex justify-content-center align-items-center">
            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDecrease={this.handleDecrease}
              onDelete={this.handleDelete}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <PersonList />
          </div>
        </div>
        <div className="row">
          <div className="col border d-flex justify-content-center align-items-center">
            <Test />
          </div>
          <div className="col border d-flex justify-content-center align-items-center">
            <Fetch />
          </div>
        </div>
        <div className="row">
          <div className="col border d-flex justify-content-center align-items-center">
            empty cell
          </div>
          <div className="col border d-flex justify-content-center align-items-center">
            empty cell
          </div>
        </div>
      </section>
    );
  }
}
