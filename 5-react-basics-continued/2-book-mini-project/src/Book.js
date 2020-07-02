import React, { Component } from 'react';
import Button from './Button'

export default class Book extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    };
    // bind state to change the execution context from global to local in ES5 handleClick function
    // this.handleClick = this.handleClick.bind(this);
  }
  // handleClick (){
  //   console.log('click')
  //   console.log(this.state.count)
  // }

  // handleClick = () => {
  //   console.log(this.state.count)
  // }

  // addCount = () => {
  //   this.setState({count: this.state.count + 1})
  // }
  // resetCount = () => {
  //   this.setState({count: 0})
  // }
  // lowerCount = () => {
  //   this.setState({count:this.state.count - 1})
  // }

  render() {
    const { img, title, author } = this.props.info;
    const { handleDelete } = this.props
    
    return (
      <article className="book">
        <img
          className="book-cover"
          src={img}
          width="200px"
          alt={`${title} cover`}
        />
        <div>
          <h3>Title : {title}</h3>
          <h5>Author : {author}</h5>
          <Button handleDelete={handleDelete} />
          {/* <h3>Count: {this.state.count}</h3> */}
          {/* <button type="button" onClick={this.addCount}>
            add count
          </button>
          <button type="button" onClick={this.resetCount}>
            reset count
          </button>
          <button type="button" onClick={this.lowerCount}>
            lower count
          </button> */}
        </div>
      </article>
    );
  }
}
