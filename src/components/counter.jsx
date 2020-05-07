import React, { Component } from "react"; //imrc tab shortcut

class Counter extends Component {
  state = {
    // count: 0,
    value: this.props.counter.value,
    // tags: ["tag1", "tag2", "tag3"],
  };

  // handleIncrement = () => {
  //   //   // console.log("Increment Cliked", this);
  //   this.setState({ value: this.state.value + 1 });
  // };
  // handleDecrease = () => {
  //   this.setState({ value: this.state.value - 1 });
  // };

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
    // return count === 0 ? <h1>Zero</h1> : count;
    // return this.state.count === 0 ? "Zero" : this.state.count;
  }

  render() {
    // console.log("props", this.props);
    // React.createElement("div")
    return (
      <div>
        <div>
          <button
            onClick={() => this.props.onDecrease(this.props.counter)}
            className="btn btn-success btn-lg"
          >
            Decrease -
          </button>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            // onClick={this.handleIncrement}
            className="btn btn-success btn-lg"
          >
            Increment +
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
        <div>
          {/* <span className={this.getBadgeClasses()}>{this.props.counter}</span> */}
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 "; //put space at the end
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }
}

export default Counter;
