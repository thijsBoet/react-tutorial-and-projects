import React, { Component } from 'react';
import Book from './Book'
import booksData from './bookData'

// when using a class use this keyword for references
export default class Booklist extends Component {
  // state can be initialized within constructor function too
  constructor(props){
    super(props)
    this.state = {
      // can be imported as module too
      books: booksData
    };
  }
  // state = {
    // books : [
      // {
      //   id: 1,
      //   book: 'Moby Dick',
      //   author: 'Herman Melville'
      // },
      // {
      //   id: 2,
      //   book: 'Fight Club',
      //   author: 'Chuck Palahniuk'
      // },
      // {
      //   id: 3,
      //   book: 'The Lord of the Rings',
      //   author: 'JRR Tolkien'
      // }
    // ]
  //};
// this.setState to change state
  render() {
    // const books = this.state.books.map(item => item.book)
    // console.log(books);
    
    return (
      <section>
        <h2>Booklist</h2>
        {/*  info={item} passes books to Book class component */}
        {this.state.books.map((item) => (
          // must always pass a fixed key value
          <Book key={item.id} info={item}></Book>
        ))}
      </section>
    );
  }
}
