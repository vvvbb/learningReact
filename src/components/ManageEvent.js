import React, { Component } from "react";

export default class ManageEvent extends Component {
  constructor(props) {
    super(props);
    this.state = { n: props.start, timer: null };
    // this.timer = null;
    this.reset = this.reset.bind(this)
  }

  componentDidMount() {
    this.play();
  }
  componentWillUnmount() {
    // this.pause();
    window.clearInterval(this.state.timer);
  }
  increment() {
    this.setState((state, props) => ({ n: state.n + props.step }));
  }
  pause() {
    window.clearInterval(this.state.timer);
    this.setState({
      timer: null,
    });
    console.log(this.state);
  }
  play() {
    window.clearInterval(this.state.timer);
    this.setState({
      timer: window.setInterval(this.increment.bind(this), 300),
    });
    console.log(this.state);
  }
  reset() {
    this.pause();
    // this.play()
    this.setState((state, props) => ({ n: props.start }));
  }

  render() {
    return (
      <div>
        {/* <button>Pause</button> */}
        valeur : {this.state.n}
        {this.state.timer ? (
          <button onClick={this.pause.bind(this)}>Pause</button>
        ) : (
          <button onClick={this.play.bind(this)}>play</button>
        )}
        {/* <button onClick={this.reset.bind(this)}>reset</button> */}
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

ManageEvent.defaultProps = {
  start: -33,
  step: 3,
};
