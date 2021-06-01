import React, { Component } from "react";
import { Link } from "react-router-dom";

//stateless functionnal component

class NavBar extends Component {
  state = {
    isNavCollapsed: true,
  };

  handleCollapsed = () => {
    this.setState({ isNavCollapsed: !this.state.isNavCollapsed });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.handleCollapsed}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={` ${
            this.state.isNavCollapsed ? "collapse " : ""
          } navbar-collapse`}
          id="navbarContent"
        >
          <ul className="navbar-nav w-100 justify-content-between">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Learning react
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calculator">
                Calculator Project
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/city-list">
                City List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/test">
                Test {this.props.totalCounters}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
