import React, { useEffect, useState } from "react";
import Colorbar from "./Colorbar";
import TodoInput from "./TodoInput";
import TodoSearchInput from "./TodoSearchInput";
import TodoList from "./Todolist";

const colors = ["red", "yellow", "pink", "violet"];

export default function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const [editText, setEditText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

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

  useEffect(() => {
    // 검색창이 비어져있을 때는 todoList가 보여야하고 검색버튼 눌렸을 때는 filteredList가 보이도록
    if (searchText.length == 0 || !searchText) {
      setFilteredTodoList([...todoList]);
    }
  }, [searchText, todoList]);

  const handleSearch = () => {
    const filteredTodos = todoList.filter((todo) => todo.text.includes(searchText));
    setFilteredTodoList(filteredTodos);
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

  const handleEditClick = (index) => {
    const editState = document.getElementById(index).readOnly;
    // readonly 상태가 아닐 때
    if (!editState) {
      // 수정하는 로직
      const newTodoList = todoList.map((el, i) => {
        if (i === index) {
          return { ...el, text: editText };
          // return { ...el, text: ref.current.value };
        } else {
          return el;
        }
      });
      setTodoList(newTodoList);
      setEditIndex(null);
      document.getElementById(index).readOnly = true;
    } else {
      document.getElementById(index).readOnly = false;
      setEditIndex(index);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", margin: 100 }}>
      <div style={{ textAlign: "center" }}>
        <h1>Todo App</h1>
        <TodoInput inputText={inputText} setInputText={setInputText} addTodo={addTodo} activeColor={activeColor} />
        <TodoSearchInput searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch} />
      </div>
      <Colorbar colors={colors} setActiveColor={setActiveColor} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: 50 }}>
        <h3>Todo Items</h3>
        <TodoList
          filteredTodoList={filteredTodoList}
          handleItemClick={handleItemClick}
          handleEditClick={handleEditClick}
          setEditText={setEditText}
          editText={editText}
        />
      </div>
    </div>
  );
}
