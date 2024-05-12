import React, { useState } from "react";

const colors = ["red", "yellow", "pink", "violet"];

export default function TodoApp() {
  const [todoList, setTodoList] = useState([
    // {
    //   text: "",
    //   color: "",
    // },
  ]);

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
    console.log(setTodoList);
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
      <div style={{ textAlign: "center" }}>
        <h1>Todo App</h1>
        <div>
          <input
            style={{ backgroundColor: activeColor, width: "500px" }}
            onChange={handleInputChange}
            value={inputText}
          />
          <button onClick={addTodo}>입력</button>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {colors.map((color) => (
          <div
            onClick={() => {
              // 각 원에는 onClick 이벤트 설정
              setActiveColor(color);
            }}
            style={{
              backgroundColor: color,
              width: 10,
              height: 10,
              borderRadius: 10,
              margin: 10,
            }}
          ></div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>Todo List</h3>
        <div>
          {todoList.map((todo) => {
            return (
              <div
                style={{
                  backgroundColor: todo.color,
                  width: "700px",
                  height: "50px",
                  margin: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {todo.text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
