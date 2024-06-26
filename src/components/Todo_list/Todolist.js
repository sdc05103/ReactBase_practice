// TodoList.js
import React from "react";
import TodoItem from "./TodoItem";
import { useTodo } from "./TodoContext";

// TodoItem을 가져오기 때문에 우선은 훅 적용x
export default function TodoList({}) {
  const { filteredTodoList, handleEditClick, handleItemClick, editText, setEditText } = useTodo();
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
