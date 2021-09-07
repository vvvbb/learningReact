import React, { Component } from "react";

class ChangeColorChild extends Component {
  constructor(props) {
    super(props);
    this.state = { color: props.color };
  }

  render() {
    return <div style={{ color: this.state.color }}>Hellow Change World</div>;
  }
}

export default class ChangeColorParent extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }

  render() {
    return (
      <div>
        <ChangeColorChild color={this.state.color} />
        <button onClick={() => this.setState({ color: "green" })}>
          Button Change Color
        </button>
      </div>
    );
  }
}
