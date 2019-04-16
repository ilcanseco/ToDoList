import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import ToDoItem from "./ToDoItem";

class App extends Component {
  render() {
    return (
      <div className="todo-list">
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </div>
    );
  }
}

export default App;
