import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext();
const colors = ["red", "yellow", "pink", "violet"];

export function ThemeProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const [editText, setEditText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // 검색
  const handleSearch = () => {
    const filteredTodos = todoList.filter((todo) => todo.text.includes(searchText));
    setFilteredTodoList(filteredTodos);
  };

  // 입력
  const addTodo = () => {
    const newTodo = {
      text: inputText,
      color: activeColor,
    };
    setTodoList([...todoList, newTodo]);
    setInputText("");
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
    if (!editState) {
      const newTodoList = todoList.map((el, i) => {
        if (i === index) {
          return { ...el, text: editText };
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
    <TodoContext.Provider
      value={{
        todoList,
        activeColor,
        setActiveColor,
        inputText,
        setInputText,
        searchText,
        setSearchText,
        filteredTodoList,
        setEditText,
        editText,
        editIndex,
        addTodo,
        handleSearch,
        handleEditClick,
        handleItemClick,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const {
    todoList,
    filteredTodoList,
    activeColor,
    setActiveColor,
    inputText,
    setInputText,
    searchText,
    setSearchText,
    setEditText,
    editText,
    editIndex,
    addTodo,
    handleSearch,
    handleEditClick,
    handleItemClick,
  } = useContext(TodoContext);
  return {
    todoList,
    activeColor,
    setActiveColor,
    inputText,
    setInputText,
    searchText,
    setSearchText,
    filteredTodoList,
    setEditText,
    editText,
    editIndex,
    addTodo,
    handleSearch,
    handleEditClick,
    handleItemClick,
  };
}
