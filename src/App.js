import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import TodoInput from "./components/todoInput";
import TodoItem from "./components/todoItem";

const initialToDoList = {
  todos: [
    { id: 0, text: "eat breakfast!" },
    { id: 1, text: "eat lunch!" },
    { id: 2, text: "eat dinner!" },
  ],
  nextId: 3,
};

const App = () => {
  const [toDoList, setToDoList] = useState(initialToDoList);

  const addTodo = (todoText) => {
    let todos = toDoList.todos;
    console.log("addTodo", { id: toDoList.nextId, text: todoText });
    todos.push({ id: toDoList.nextId, text: todoText });
    setToDoList({
      todos: todos,
      nextId: ++toDoList.nextId,
    });
  };

  const removeTodo = (id) => {
    setToDoList({
      ...toDoList,
      todos: toDoList.todos.filter((todo, index) => todo.id !== id),
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={addTodo} />
          <ul>
            {toDoList.todos.map((todo) => {
              console.log(todo.id);
              return (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  id={todo.id}
                  removeTodo={removeTodo}
                />
              );
            })}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default App;
