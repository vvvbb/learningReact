import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold",
  };

  render() {
    // React.createElement("div")
    return (
      <React.Fragment>
        <h1 style={this.styles}>Hello World Bold</h1>
        <h1 style={{ fontStyle: "italic" }}>Hello World italic</h1>

        <img src={this.state.imageUrl} alt="" />

        <span>{this.state.count}</span>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button className="btn btn-secondary btn-lg">Invrement</button>

        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 "; //put space at the end
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
    // return count === 0 ? <h1>Zero</h1> : count;
    // return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
