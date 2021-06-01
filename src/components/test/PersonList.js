import React, { Component } from "react";

const Person = ({ img, name, age, info }) => {
  return (
    <article className="text-center">
      <img src={img} alt="person" />
      <h4>name : {name}</h4>
      <h4>age : {age}</h4>
      <h4>info : {info}</h4>
    </article>
  );
};

Person.defaultProps = {
  name: "defaultProps name",
  age: "defaultProps age",
};

export default class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        name: "john",
        age: "24",
      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/thumb/men/29.jpg",
        // name: "david",
        age: "29",
      },
      {
        id: 3,
        img: "https://randomuser.me/api/portraits/thumb/men/18.jpg",
        name: "bill",
        age: "19",
      },
    ],
  };
  render() {
    return (
      <section className="d-flex justify-content-around mt-5">
        {this.state.people.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            info={person.info}
            img={person.img}
          />
        ))}
      </section>
    );
  }
}
