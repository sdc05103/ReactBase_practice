import React, { useState } from "react";
import { useTodo } from "./TodoContext";

export default function TodoItem({ todo, index }) {
  const { handleItemClick, handleEditClick, setEditText, editText } = useTodo();

  const [inputText, setInputText] = useState(todo.text);
  const [editState, setEditState] = useState(true);

  const handleChange = (e) => {
    setInputText(e.target.value);
    // setFilteredTodoList(
    //   filteredTodoList.map((filteredTodo, idx) =>
    //     index === idx ? { ...filteredTodo, text: e.target.value } : filteredTodo,
    //   ),
    // );
  };

  const changeState = () => {
    if (!editState) {
      setEditState(true);
    }
    setEditState(false);
  };

  return (
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
      <input id={index} type="text" value={inputText} readOnly={editState} onChange={handleChange} />
      <button onClick={() => handleItemClick(index)}>삭제</button>
      <button
        onClick={() => {
          handleEditClick(index, inputText);
          changeState();
        }}
      >
        수정
      </button>
    </div>
  );
}
