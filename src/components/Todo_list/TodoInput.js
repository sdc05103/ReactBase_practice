import React from "react";

export default function TodoInput({
  handleInputChange,
  addTodo,
  inputText,
  activeColor,
}) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Todo App</h1>
      <div>
        <input
          style={{ backgroundColor: activeColor, width: 500 }}
          onChange={handleInputChange}
          value={inputText}
        />
        <button onClick={addTodo}>입력</button>
      </div>
    </div>
  );
}
