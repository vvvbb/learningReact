import React, { Component } from "react"; //imrc tab shortcut
import Counter from "./counter";

// cc tab shortcut
class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onDecrease } = this.props;

    return (
      <div>
        <button
          // onClick={this.props.onReset}
          onClick={onReset}
          className="btn btn-outline-dark btn-sm my-2 d-block ml-auto"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete} // onDelete={this.props.onDelete}
            onIncrement={onIncrement}
            onDecrease={onDecrease}
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
