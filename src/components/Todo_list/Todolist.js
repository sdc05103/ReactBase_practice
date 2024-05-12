import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todoList }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3>Todo List</h3>
      <div>
        {todoList.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </div>
    </div>
  );
}
