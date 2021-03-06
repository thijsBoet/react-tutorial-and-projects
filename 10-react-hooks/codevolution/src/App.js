import React from 'react';

import ClassCounter from './components/ClassCounter';
import ClassCounterTwo from './components/ClassCounterTwo';
import ClassUseEffect from './components/ClassUseEffect';
import ClassMouse from './components/ClassMouse';
import ClassIntervalCounter from "./components/ClassIntervalCounter";


import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterPrevState from './components/HookCounterPrevState';
import HookCounterObject from './components/HookCounterObject';
import HookCounterArray from './components/HookCounterArray';
import HookUseEffect from './components/HookUseEffect';
import HookMouse from './components/HookMouse';
import MouseContainer from "./components/MouseContainer";
import HookIntervalCounter from "./components/HookIntervalCounter";

import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC'

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

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
      <h4>Hooks Mouse Toggle</h4>
      <MouseContainer />
      <h4>Class Interval Counter</h4>
      <ClassIntervalCounter />
      <h4>Hook Interval Counter</h4>
      <HookIntervalCounter />
      <h4>Data Fetching</h4>
      <DataFetching />
      <h4>Context</h4>
      <UserContext.Provider value={"Matthijs Boet"}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </main>
  );
}

export default App;