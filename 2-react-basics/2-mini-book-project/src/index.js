import React from "react";
import ReactDOM from "react-dom";
import './index.css'

function Books() {
  return (
    <section className="books">
      <Book/>
      <Book/>
      <Book/>
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <CoverImage />
      <Title />
      <Author />
    </article>
  );
};

const CoverImage = () => (
  <img
    width="200px"
    src="https://m.media-amazon.com/images/I/51NA6SBuY2L.jpg"
    alt="Nikola Tesla: Imagination and the Man That Invented the 20th Century"
  />
);

// properties in quotes using JSX fontSize: "2rem"
const Title = () => <h1 style={{ fontSize: "2rem", color: 'red' }}>Nikola Tesla</h1>;

const authorStyle = {
  letterSpacing: '10px',
  color: 'green'
}
const Author = () => <h4 style={ authorStyle }>by Sean Patrick</h4>;

ReactDOM.render(<Books />, document.getElementById("root"));
