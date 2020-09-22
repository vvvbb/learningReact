import React, { Component } from "react";

//stateless functionnal component

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a
          className="navbar-brand"
          href="https://www.youtube.com/watch?v=Ke90Tje7VS0"
        >
          Navbar Text Body{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
