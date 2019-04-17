import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import ToDoItem from "./ToDoItem";
import todosData from "./todosData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }
  render() {
    const todoItems = this.state.todos.map(item => (
      <ToDoItem key={item.id} item={item} />
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
