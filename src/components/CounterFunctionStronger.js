import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class CounterFunctionStronger extends Component {
  state = {
    count: this.props.amount,
  };
  handleIncrease = () => {
    console.log("called first :", this.state.count);
    // this.setState({ count: this.state.count + 1 });
    this.setState((state, props) => {
      return ( {count:  this.state.count + this.props.inc} );
    },() => console.log("called second :",this.state.count)
    );
    console.log("called third :", this.state.count)
  };
  
  handleDecrease = () => {
    console.log("called first :", this.state.count);
    this.setState({ count: this.state.count - this.props.dec });
  };

  render() {
    return (
      <>
        <div className="text-center mt-3">
          <Button
            variant="outline-warning"
            className="text-uppercase"
            type="button"
            onClick={this.handleDecrease}
          >
            decrease by : {this.props.dec}
          </Button>
          <span className="mx-3">count : {this.state.count}</span>
          <Button
            variant="outline-success"
            className="text-uppercase"
            type="button"
            onClick={this.handleIncrease}
          >
            increase by : {this.props.inc}
          </Button>
        </div>
      </>
    );
  }
}
