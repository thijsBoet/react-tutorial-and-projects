import React from 'react';
import ClassCounter from './components/ClassCounter';
import ClassCounterTwo from './components/ClassCounterTwo';
import ClassUseEffect from './components/ClassUseEffect';
import ClassMouse from './components/ClassMouse'


import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterPrevState from './components/HookCounterPrevState'
import HookCounterObject from './components/HookCounterObject'
import HookCounterArray from './components/HookCounterArray'
import HookUseEffect from './components/HookUseEffect'
import HookMouse from './components/HookMouse'


function App() {

  return (
    <main className="App">
      <h4>Class Counter</h4>
      <ClassCounter />
      <h4>Hook Counter</h4>
      <HookCounter />
      <h4>Class Counter Two</h4>
      <ClassCounterTwo />
      <h4>Hook Counter PrevState</h4>
      <HookCounterPrevState />
      <h4>Hook Counter Object</h4>
      <HookCounterObject />
      <h4>Hook Counter Array</h4>
      <HookCounterArray />
      <h4>Class useEffect</h4>
      <ClassUseEffect />
      <h4>Hook useEffect</h4>
      <HookUseEffect />
      <h4>Class MouseMove</h4>
      <ClassMouse />
      <h4>Hooks MouseMove</h4>
      <HookMouse />
    </main>
  );
}

export default App;