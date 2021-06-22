import React, { Component } from "react";

export default class ButtonAndInput extends Component {
 /*  constructor(props) {
    super(props);
  } */

  handleClick() {
    this.textInput.focus();
  }

  render() {
    return (
      <div className="form-group text-center">
        <input
          type="text"
          className="form-control my-2"
          ref={(input) => (this.textInput = input)}
        />
        <button
          onClick={() => this.handleClick()}
          className="btn btn-outline-primary"
        >
          Focus Button
        </button>
      </div>
    );
  }
}
