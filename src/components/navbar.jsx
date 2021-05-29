import React, { Component } from "react";
import { Link } from "react-router-dom";

//stateless functionnal component

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
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
            <li>
              <Link className="nav-link disabled" to="/">
                Disabled {this.props.totalCounters}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
