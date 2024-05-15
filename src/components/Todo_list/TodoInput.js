import React, { useEffect } from "react";

import { useTodo } from "./TodoContext";

export default function TodoInput() {
  const { addTodo, activeColor, todoList, setTodoList, setInputText, inputText } = useTodo();

  useEffect(() => {
    if (todoList && todoList.length > 0) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (storedTodoList) {
      setTodoList(storedTodoList);
    }
  }, []);

  return (
    <div style={{ marginTop: 50, marginBottom: 20 }}>
      <input
        type="text"
        style={{ backgroundColor: activeColor, width: 500 }}
        placeholder="입력"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button onClick={addTodo}>입력</button>
    </div>
  );
}
