import React, {Component} from "react";
import Book from "./Book";
import booksData from './bookData'

export default class Booklist extends Component {
  constructor(props){
    super(props);
    this.state ={
      books: booksData

    };
  }

  handleDelete = () => {
    console.log('I am from parent component')
  }

  render() {
    return (
      <section>
        {this.state.books.map(book =>(
          // handleDelete passes the method to the Book Component
          <Book key={book.id} info={book} handleDelete={this.handleDelete}/>
        ))}
      </section>
    )
  }
}
