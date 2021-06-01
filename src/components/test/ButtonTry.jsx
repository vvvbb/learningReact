/*
import logo from './logo.svg';
import './App.css';

function Square() {
  return (
    <div className="App">
        <button className="square" onClick={function() { alert('click'); }}>
            {this.props.value}
        </button>
    </div>
  );
}

export default Square;
*/

import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

class ButtonTry extends Component {
  render() {
    let a = 2;
    // let a = sum([x*x for x in [1,2,3]]);
    console.log(a);
    return (
      <Button
        className="square d-flex m-auto btn-info"
        onClick={function () {
          alert("click");
        }}
      >
        {this.props.value}
      </Button>
    );
  }
}

export default ButtonTry;
