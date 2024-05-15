import React from "react";
import Colorbar from "./Colorbar";
import TodoInput from "./TodoInput";
import TodoSearchInput from "./TodoSearchInput";
import TodoList from "./Todolist";

export default function TodoApp() {
  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", margin: 100 }}>
      <div style={{ textAlign: "center" }}>
        <h1>Todo App</h1>
        <TodoInput />
        <TodoSearchInput />
      </div>
      <Colorbar />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: 50 }}>
        <h3>Todo Items</h3>
        <TodoList />
      </div>
    </div>
  );
}
