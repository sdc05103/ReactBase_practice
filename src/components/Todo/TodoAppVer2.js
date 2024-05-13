import React, { useEffect, useState } from "react";

const colors = ["red", "yellow", "pink", "violet"];

export default function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState(""); // 검색어 상태 추가

  useEffect(() => {
    if (todoList && todoList.length > 0) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem("todoList"));
    console.log(storedTodoList);
    console.log(todoList);
    if (storedTodoList) {
      setTodoList(storedTodoList);
    }
  }, []);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSearchChange = (event) => {
    // 검색어 변경 핸들러
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    // 검색 버튼을 클릭했을 때 실행되는 함수
    // 검색어에 해당하는 할 일 항목만 보여주도록 todoList를 필터링합니다.
    const filteredTodos = todoList.filter((todo) => todo.text.includes(searchText));
    // 필터링된 할 일 목록을 설정합니다.
    setTodoList(filteredTodos);
  };

  const addTodo = () => {
    const newTodo = {
      text: inputText,
      color: activeColor,
    };
    setTodoList([...todoList, newTodo]);
    setInputText("");
  };

  const handleItemClick = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        flexDirection: "column",
        margin: 100,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Todo App</h1>
        <div style={{ marginTop: 50, marginBottom: 20 }}>
          <input
            type="text"
            style={{ backgroundColor: activeColor, width: 500 }}
            placeholder="입력"
            onChange={handleInputChange}
            value={inputText}
          />
          <button onClick={addTodo}>입력</button>
        </div>
        {/* 검색어 입력창 */}
        <div style={{ marginBottom: 50 }}>
          <input
            type="text"
            placeholder="검색"
            onChange={handleSearchChange}
            value={searchText} // 검색어 상태와 연결
          />
          <button onClick={handleSearch}>검색</button>
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
          margin: 50,
        }}
      >
        <h3>Todo Items</h3>
        <div>
          {todoList
            // .filter((todo) => todo.text.includes(searchText)) // 검색어로 필터링
            .map((todo, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: todo.color,
                  width: 700,
                  height: 50,
                  margin: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => handleItemClick(index)}
              >
                {todo.text}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
