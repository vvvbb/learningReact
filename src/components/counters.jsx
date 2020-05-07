import React, { Component } from "react"; //imrc tab shortcut
import Counter from "./counter";

// cc tab shortcut
class Counters extends Component {
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
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-outline-dark btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrease={this.handleDecrease}
            // value={counter.value}
            // id={counter.id}
            // selected={counter.selected}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
