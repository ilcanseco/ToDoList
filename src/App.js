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
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todo: updatedTodos
      };
    });
  }

  handleKeyDown = e => {
    if (e.key === "Enter") {
      this.setState({
        todos: [this.state.todos, this.makeItem()]
      });
      console.log(this.state.todos);
    }
  };

  render() {
    const todoItems = this.state.todos.map(item => (
      <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <div className="todo-list">
        {todoItems}
        {
          <form>
            <input
              className="text-box"
              type="text"
              placeholder="Enter a new task"
              value={this.state.text}
              onKeyDown={this.handleKeyDown}
            />
          </form>
        }
      </div>
    );
  }
}

export default App;
