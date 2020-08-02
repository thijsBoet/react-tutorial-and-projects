import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(4);


  function decrementCount() {
    setCount(prevCount => prevCount - 1);
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div className="App">
      <button onClick={decrementCount} className="minus-btn">
        -
      </button>
      <span>{count}</span>
      <button onClick={incrementCount} className="plus-btn">
        +
      </button>
    </div>
  );
}

export default App;
