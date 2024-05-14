// TodoList.js
import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ filteredTodoList, handleItemClick, handleEditClick, editText, setEditText }) {
  return (
    <div>
      {filteredTodoList.map((todo, index) => (
        <TodoItem
          key={index} // key는 리스트 항목을 고유하게 식별하는 용도로 사용됨
          index={index}
          todo={todo}
          handleItemClick={handleItemClick}
          handleEditClick={handleEditClick}
          editText={editText}
          setEditText={setEditText}
        />
      ))}
    </div>
  );
}
