import React from "react";
import ReactDOM from "react-dom";

const btnText = 'big button';

function Person() {
  // only create variables before return statement
  const btn = 'search button'
  const name = 'John'
  const lastName = 'Doe'
  return (
    <section>
      <button>{btnText}</button>
      {/* { statement } must always return a value */}
      <h2>{`${name} ${lastName}`}</h2>
      <p>info</p>
    </section>
  );
}

ReactDOM.render(<Person />, document.getElementById("root"));
