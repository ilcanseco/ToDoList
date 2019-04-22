import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import ToDoItem from "./ToDoItem";
import todosData from "./todosData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
      isChecked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBox = this.handleBox.bind(this);
  }

  makeItem(text, completed) {
    return {
      text: text,
      completed: completed ? completed : false
    };
  }

  handleChange(key) {
    this.setState(() => {
      const copyOfTodos = this.state.todos;

      copyOfTodos[key].completed = !copyOfTodos[key].completed;
      return {
        todos: copyOfTodos
      };
    });
  }

  handleBox() {
    this.setState({ isChecked: !this.state.isChecked });
    // console.log(this.state.isChecked);
  }

  onSubmit = e => {
    const todoText = e.target.todoText.value;
    const todoIsCompleted = this.state.isChecked;

    const newTodoItem = this.makeItem(todoText, todoIsCompleted);

    this.setState({
      todos: [...this.state.todos, newTodoItem]
    });

    e.preventDefault();
  };

  render() {
    const todoItems = this.state.todos.map((item, index) => (
      <ToDoItem
        key={index}
        item={item}
        handleChange={this.handleChange}
        index={index}
      />
    ));

    console.log(this.state.isChecked);

    return (
      <div className="todo-list">
        {todoItems}
        {
          <form onSubmit={this.onSubmit}>
            <input
              name="todoText"
              className="text-box"
              type="text"
              placeholder="Enter a new task"
              value={this.state.text}
            />
            <input
              type="checkbox"
              name="todoIsCompleted"
              checked={this.state.isChecked}
              onChange={this.handleBox}
            />
            <button type="submit"> SUBMIT!!!</button>
          </form>
        }
      </div>
    );
  }
}

export default App;
