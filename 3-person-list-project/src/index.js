import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const Person = ({img, name, job, children}) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return (
    <article className="person">
      <img src={url} alt="person thumbnail" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="john" job="developer"/>
      <Person img="22" name="bob" job="designer">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, dicta.
      </Person>
      <Person img="56" name="david" job="CEO"/>
    </section>
  )
}

ReactDOM.render(<PersonList></PersonList>, document.getElementById('root'));