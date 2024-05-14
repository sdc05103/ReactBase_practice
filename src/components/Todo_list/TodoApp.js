import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import Colorbar from "./Colorbar";
import TodoList from "./Todolist";

const colors = ["red", "yellow", "pink", "violet"];

export default function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState(""); // 검색어 상태 추가
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const [editText, setEditText] = useState("");

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

  // 추가
  const addTodo = () => {
    const newTodo = {
      text: inputText,
      color: activeColor,
    };
    setTodoList([...todoList, newTodo]);
    setInputText("");
  };

  // 검색
  const handleSearch = () => {
    const filteredTodos = todoList.filter((todo) => todo.text.includes(searchText));
    console.log(filteredTodos);
    setFilteredTodoList(filteredTodos);
  };

  // 삭제
  const handleItemClick = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  // 수정
  const handleEditClick = (index) => {
    const editState = document.getElementById(index).readOnly;
    // readonly 상태가 아닐 때 => 수정
    if (!editState) {
      const newTodoList = todoList.map((el, i) => {
        if (i === index) {
          return { ...el, text: editText };
        } else {
          return el;
        }
      });
      setTodoList(newTodoList);
      document.getElementById(index).readOnly = true;
    } else {
      document.getElementById(index).readOnly = false;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: 100,
      }}
    >
      <TodoInput addTodo={addTodo} inputText={inputText} activeColor={activeColor} />
      <Colorbar colors={colors} setActiveColor={setActiveColor} />

      <h3>Todo Items</h3>
      <div>
        <TodoList
          todoList={filteredTodoList}
          handleItemClick={handleItemClick}
          handleEditClick={handleEditClick}
          editText={editText}
          setEditText={setEditText}
        />
      </div>
    </div>
  );
}
