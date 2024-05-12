import React, { useState } from "react";
import TodoInput from "./TodoInput";
import Colorbar from "./Colorbar";
import TodoList from "./Todolist";

const colors = ["red", "yellow", "pink", "violet"];

export default function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const addTodo = () => {
    const newTodo = {
      text: inputText,
      color: activeColor,
    };
    setTodoList([...todoList, newTodo]);
    setInputText("");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <TodoInput
        handleInputChange={handleInputChange}
        addTodo={addTodo}
        inputText={inputText}
        activeColor={activeColor}
      />
      <Colorbar colors={colors} setActiveColor={setActiveColor} />
      <TodoList todoList={todoList} />
    </div>
  );
}
