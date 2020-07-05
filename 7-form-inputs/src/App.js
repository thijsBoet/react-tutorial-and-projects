import React, { Component } from 'react'
import "./App.css";

// controlled and uncontrolled inputs
// controlled are preferred method

// value and onChange
class Form extends Component {
  state = {
    firstName : '',
    lastName : '',
    people: []
  }

  handleChange = e => {
    // if(e.target.name === 'firstName'){
    //   const textValue = e.target.value;
    //   this.setState({
    //     firstName: textValue,
    //   });
    // }
    const value = e.target.value.toUpperCase();
    this.setState({
      // shorthand method
      [e.target.name]: value,
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    // controlled inputs

    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    if(firstName.length > 0 && lastName.length > 0){
      const person = `${firstName} ${lastName} `;
      console.log(this.state.person);
      this.setState({
        people:[...this.state.people, person],
        firstName: '',
        lastName: ''
      });
    }

    // uncontrolled inputs

    // const firstNameValue = this.refs.firstName.value;
    // const lastNameValue = this.refs.lastName.value;
    // const text = this.refs.myText;
    // const textValue = this.refs.myText.textContent;
    // text.style.color = "red"
    // console.log(firstNameValue, lastNameValue, textValue);
  }

  render() {
    return (
      <section>
        <article>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              ref="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              ref="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <button type="submit">
              submit
            </button>
          </form>
        </article>
        <p ref="myText">hello world</p>
        <article>
          <h1>people</h1>
          <ul>
            {this.state.people}
          </ul>
        </article>
      </section>
    );
  }
}

class Counter extends Component {
  state = {
    count: 0,
  };

  // React is Asynchronous
  handleIncrease = () => {
    console.log("called first :", this.state.count);
    this.setState(
      {
        count: this.state.count + 1,
        // if you want correct current value within state call it within setState function
      }, () => console.log("called second :", this.state.count)
    );
    console.log("called third :", this.state.count);
  };

  handleDecrease = () => {
    console.log("called first :", this.state.count);
    this.setState(
      (state, props) => {
        return { count: state.count - 1 };
      },
      () => console.log("called second :", this.state.count)
    );
    console.log("called third :", this.state.count);
  };

  render() {
    return (
      // react fragment <> </> || <React.Fragment></React.Fragment>
      <>
        <div style={{ margin: "3rem", fontSize: "2rem" }}>
          <button
            onClick={this.handleDecrease}
            type="button"
            className="count-btn"
          >
            decrease
          </button>
          <span style={{ margin: "3rem" }}>count: {this.state.count}</span>
          <button
            onClick={this.handleIncrease}
            type="button"
            className="count-btn"
          >
            increase
          </button>
        </div>
      </>
    );
  }
}



export default class App extends Component {
  render() {
    return (
      <div>
        <Form/>
        <Counter/>
      </div>
    )
  }
}
