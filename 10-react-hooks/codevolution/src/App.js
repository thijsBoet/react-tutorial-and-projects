import React from 'react';
import ClassCounter from './components/ClassCounter';
import ClassCounterTwo from './components/ClassCounterTwo';

import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'

function App() {

  return (
    <main className="App">
      <h3>Class Counter</h3>
      <ClassCounter />
      <h3>Hook Counter</h3>
      <HookCounter />
      <h3>Class Counter Two</h3>
      <ClassCounterTwo />
      <h3>Hook Counter Two</h3>
      <HookCounterTwo />
      <h3>Hook Counter Three</h3>
      <HookCounterThree />
    </main>
  )
}

export default App;