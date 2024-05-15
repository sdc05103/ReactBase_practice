import React from 'react';

export default function TodoSearchInput({ searchText, setSearchText, handleSearch }) {
  return (
    <div style={{ marginBottom: 50 }}>
      <input
        type="text"
        placeholder="검색"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
}