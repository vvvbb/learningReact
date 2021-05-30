import React, { Component } from "react";
import City from "./City";
import "./citylist.scss";
import { cityData } from "./cityData";

export default class CityList extends Component {
  state = {
    tours: cityData,
  };

  removeTour = (id) => {
    // console.log(id);
    const { tours } = this.state;
    const sortedTours = tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: sortedTours,
    });
  };

  render() {
    // console.log(this.state.tours);
    const { tours } = this.state; //destructur

    return (
      <section className="tourlist">
        {tours.map((tour) => (
          <City key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}
