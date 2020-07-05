import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.scss';

const Person = ({ person: {id, img, name, age }}) => {
  return (
    <a href="#" id={id}>
      <article className="person-info">
        <img src={img} alt={name} />
        <span className="person-name">{name}</span>
        <span>{age}</span>
      </article>
    </a>
  );
};

// prop types are installed via separate module
// yarn add prop-types --save-dev
// build in type checking to validate props
// array, bool, func, number, object, string, symbol
// can add isRequired to prevent empty values
Person.propTypes = {
  person:PropTypes.shape ({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }),
};

// values inserted when value is empty
Person.defaultProps = {
  img: "https://randomuser.me/api/portraits/med/men/6.jpg",
  name: "james doe",
  age: 27,
  info: "default info about person"  
};

class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/med/men/6.jpg",
        name: "Brad Gibson",
        age: 24
      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/med/men/5.jpg",
        name: "Bob Adams",
        age: 27
      },
      {
        id: 3,
        img: "https://randomuser.me/api/portraits/med/men/4.jpg",
        name: "James Smith",
        age: 29
      },
      {
        id: 4,
        img: "https://randomuser.me/api/portraits/med/men/3.jpg",
        name: "Kevin Marshall",
        age: 20
      },
      {
        id: 5,
        img: "https://randomuser.me/api/portraits/med/men/2.jpg",
        name: "Eslry Bos",
        age: 35
      },
      {
        id: 6,
        img: "https://randomuser.me/api/portraits/med/men/1.jpg",
        name: "Roger Smith",
        age: 32
      },
    ],
  };

  render() {
    return (
      <section className="info-container">
        {
          this.state.people.map(person => (
            <Person
              id={person.id} 
              person={person}
            />
          ))
        }
      </section>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <PersonList/>
    );
  }
}

