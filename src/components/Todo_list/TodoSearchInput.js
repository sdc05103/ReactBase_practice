import React, { useEffect } from "react";

import { useTodo } from "./TodoContext";

export default function TodoSearchInput() {
  const { handleSearch, setSearchText, searchText, setFilteredTodoList, todoList } = useTodo();

  useEffect(() => {
    // 검색창이 비어져있을 때는 todoList가 보여야하고 검색버튼 눌렸을 때는 filteredList가 보이도록
    if (searchText.length == 0 || !searchText) {
      setFilteredTodoList([...todoList]);
    }
  }, [searchText, todoList]);

  return (
    <div style={{ marginBottom: 50 }}>
      <input type="text" placeholder="검색" onChange={(e) => setSearchText(e.target.value)} value={searchText} />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
}
