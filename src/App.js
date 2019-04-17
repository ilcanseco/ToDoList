import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import ToDoItem from "./ToDoItem";
import todosData from "./todosData";

class App extends Component {
  render() {
    const todoItems = todosData.map(item => (
      <ToDoItem key={item.id} item={item} />
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
