import React from 'react'
import ReactDOM from 'react-dom'

// stateless functional component
// always returns JSX

// ES6, Nested Components and React Tools
const Person = () => <h2>John Doe</h2>
const Message = () => <p>This is a message</p>

// JSX RULES
// returns single element like a nested div/ section/ article
// use camelCase for html attribute => onClick => className
// className instead of class
// close every element

function Greeting(){
  return (
    <section className="container">
      <Person />
      <Message />
      <h3>hello people</h3>
        <button onClick="">button</button>
    </section>
  )
}

ReactDOM.render(<Greeting/>, document.getElementById('root'))