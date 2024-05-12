import React from "react";

export default function TodoItem({ todo }) {
  return (
    <div
      style={{
        backgroundColor: todo.color,
        width: 700,
        height: 50,
        margin: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {todo.text}
    </div>
  );
}
