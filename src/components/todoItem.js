import React from "react";
import "./todoItem.css";

const TodoItem = ({ todo, id, removeTodo }) => {
  return (
    <div className="todoWrapper">
      <button className="removeTodo " onClick={(e) => removeTodo(id)}>
        remove
      </button>
      {todo.text}
    </div>
  );
};

export default TodoItem;
