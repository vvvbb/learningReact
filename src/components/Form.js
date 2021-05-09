import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    people: [],
  };
  handleChange = (event) => {
    // console.log(event.target);
    /*
    console.log(event.target.name);
    console.log(event.target.value);

    const textValue = event.target.value;
    this.setState({
      firstName: textValue,
    });
    */
    this.setState({
        [event.target.name]: event.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    // console.log(firstName, lastName);
    if (firstName.length > 0 && lastName.length > 0) {
      const person = `${firstName} ${lastName} `;
      this.setState({
        people: [...this.state.people, person],
        firstName: "",
        lastName: "",
      });
    }
  };

  render() {
    return (
      <section  style={{ backgroundColor: "#00008088" , border:"3px solid blue", margin:"0 0.5rem", padding:"2.5rem" }}>
        <article>
          <form onSubmit={this.handleSubmit} action="">
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <Button type="submit">submit</Button>
          </form>
        </article>
        <article>
          <h1>people</h1>
          <div>{this.state.people}</div>
        </article>
      </section>
    );
  }
}
