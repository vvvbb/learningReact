import React, { Component } from "react";

class Test extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  img_properties = {
    border: "10px dashed pink",
    display: "block",
    margin: "auto",
    count: 0,
    imageUrl: "https://picsum.photos/700/300",
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold",
    // color: "cyan",
    color: "#00CC00",
    display: "flex",
    justifyContent: "center",
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
    // return count === 0 ? <h1>Zero</h1> : count;
    // return this.state.count === 0 ? "Zero" : this.state.count;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>; //return text p if array tags empty
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li> //else return content from here if array tags NOT empty
        ))}
      </ul>
    );
  }

  render() {
    // React.createElement("div")
    return (
      <div>
        <h1 style={this.styles}>Hello World Bold</h1>
        <h1 style={{ fontStyle: "italic" }}>Hello World italic</h1>

        <img
          style={this.img_properties}
          src={this.img_properties.imageUrl}
          alt=""
        />

        <div
          style={{
            display: "grid",
            color: "blue",
            // justifyContent: "space-around",
            justifyItems: "center",
            gridTemplateColumns: "auto",
          }}
        >
          <div>
            <h1>testH1</h1>
            {this.state.tags.length === 0 && "Please create a new tag!"}{" "}
            {/*if array=0 first condition true // if and second condition true // answer second*/}
            {this.renderTags()}
          </div>
        </div>
      </div>
    );
  }
}

export default Test;
