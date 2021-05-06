import React, { Component } from "react";

class Greeting extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      isShow: true,
    };
  }
 
  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
  };

  render() {
    // const greeting = "Welcome to React";

    return <h1 className="text-center">{this.props.greeting.text}</h1>;
  }
}

export default Greeting;
