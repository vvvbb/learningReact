import React, { Component } from "react";
import { FaCaretSquareDown, FaWindowClose } from "react-icons/fa";

// import "./tour.scss";

export default class City extends Component {
  state = {
    showInfo: false,
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    // console.log(this.props);
    const { id, city, img, name, info } = this.props.tour; // destructur
    const { removeTour } = this.props; //destructur

    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="city tour" />
          <span className="close-btn" onClick={() => removeTour(id)}>
            <FaWindowClose/>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span onClick={this.handleInfo}>
              <FaCaretSquareDown className="" />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
