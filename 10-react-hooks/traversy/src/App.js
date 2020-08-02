// add ,{ useState } just like we add {Component} to class components
import React, { useState } from "react";
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

import './App.css'


function App() {
  // todos is the name of our state
  // setTodos is what we are using to setState
  const [todos, setTodos] = useState([
    {
      text: "Learn React Hooks",
      isCompleted: false,
    },
    {
      text: "Learn event bindings in Vue",
      isCompleted: false,
    },
    {
      text: "Learn routing in Node.js",
      isCompleted: false,
    },
    {
      text: "Learn styled components in React",
      isCompleted: false,
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;
