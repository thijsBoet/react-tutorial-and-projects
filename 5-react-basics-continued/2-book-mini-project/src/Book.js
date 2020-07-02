import React, { Component } from 'react';
// import Button from './Button'

export default class Book extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      showInfo: true,
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


  toggleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    })
  }

  render() {
    const { id, img, title, author } = this.props.info;
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
          <button type="button" onClick={() => handleDelete(id)}>
            delete me
          </button>
          <button type="button" onClick={this.toggleInfo}>
            toggle info
          </button>
          {/* <Button handleDelete={handleDelete} /> */}

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

          {/* javascript statement must return something so if statement does not
          work workarounds: && statement / ternary operator */}

          {/* {this.state.showInfo && (
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dignissimos aliquid eligendi mollitia illo ipsa!</p>
          )} */}

          {/* { this.state.showInfo ? (
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dignissimos aliquid eligendi mollitia illo ipsa!</p>
          ) : null} */}
        </div>
      </article>
    );
  }
}
