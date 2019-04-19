import React from "react";

function ToDoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#006d00",
    textDecoration: "line-through"
  };

  const unComplete = {
    color: "#ff0000"
  };

  function makeItem(text) {
    return {
      id: this.id + 1,
      completed: false,
      text: text
    };
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? completedStyle : unComplete}>
        {props.item.text}
      </p>
    </div>
  );
}

export default ToDoItem;
