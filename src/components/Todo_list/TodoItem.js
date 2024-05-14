import React from "react";

export default function TodoItem({ todo, index, handleItemClick, handleEditClick, editText, setEditText }) {
  const handleChange = (e) => {
    setEditText(e.target.value);
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
