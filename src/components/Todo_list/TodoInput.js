import React from "react";

export default function TodoInput({ addTodo, inputText, activeColor }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Todo App</h1>
      <div style={{ marginTop: 50, marginBottom: 20 }}>
        <input
          type="text"
          style={{ backgroundColor: activeColor, width: 500 }}
          placeholder="입력"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          value={inputText}
        />
        <button onClick={addTodo}>입력</button>
      </div>
    </div>
  );
}
