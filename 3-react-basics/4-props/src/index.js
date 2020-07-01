import React from 'react';
import ReactDOM from 'react-dom'

// PROPS = ARGUMENTS TO COMPONENTS
function People(){
  const friends = [
    { name: "Anne", job: "CEO", age: 23, company: "apple" },
    { name: "John", job: "Developer", age: 21, company: "facebook" },
    { name: "Bob", job: "Designer", age: 26, company: "google" },
    { name: "Betty", job: "Copywriter", age: 28, company: "microsoft" },
  ];
  return (
    <section>
      <Person person={friends[0]}>
        {/* props.children */}
        <p>props.children</p>
      </Person>
      <Person person={friends[1]} />
      <Person person={friends[2]} />
      <Person person={friends[3]} />
    </section>
  );
}

  // Destructuring props
const Person = ({children, person: {name, job, age, company}}) => {
  // Destructuring props
  // const { name, job, age, company } = props.person;
  
  return (
    <article>
      <h1>{name}</h1>
      <p>{job}</p>
      <p>{age}</p>
      <p>{company}</p>
      {children}
      <hr />
    </article>
  );
}

ReactDOM.render(<People/>, document.getElementById('root'))