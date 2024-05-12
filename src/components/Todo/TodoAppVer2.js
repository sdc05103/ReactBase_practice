import React, { useState } from "react";

const colors = ["red", "yellow", "pink", "violet"];

export default function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState(""); // 검색어 상태 추가

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSearchChange = (event) => {
    // 검색어 변경 핸들러
    setSearchText(event.target.value);
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
        {/* 검색어 입력창 */}
        <div>
          <input
            type="text"
            placeholder="검색하기"
            onChange={handleSearchChange}
            value={searchText} // 검색어 상태와 연결
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {colors.map((color) => (
          <div
            key={color} // key 추가
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
          {todoList
            .filter((todo) => todo.text.includes(searchText)) // 검색어로 필터링
            .map((todo) => (
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
            ))}
        </div>
      </div>
    </div>
  );
}
