import React from "react";

export default function TodoItem({
  todo,
  index,
  handleItemClick,
  handleEditClick,
  setEditText,
  filteredTodoList,
  setFilteredTodoList,
  setEditIndex,
  editIndex,
}) {
  const handleChange = (e) => {
    setEditText(e.target.value);
    // setFilteredTodoList(
    //   filteredTodoList.map((filteredTodo, idx) =>
    //     index === idx ? { ...filteredTodo, text: e.target.value } : filteredTodo,
    //   ),
    // );
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
      <input id={index} type="text" value={todo.text} readOnly={true} onChange={handleChange} />
      <button onClick={() => handleItemClick(index)}>삭제</button>
      <button onClick={() => handleEditClick(index)}>수정</button>
    </div>
  );
}
