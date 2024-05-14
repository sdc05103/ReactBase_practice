import React, { useEffect, useState, useRef } from "react";
const colors = ["red", "yellow", "pink", "violet"];
export default function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState(""); // 검색어 상태 추가
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const [editText, setEditText] = useState("");

  // const ref = useRef();

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

  // 검색
  const handleSearch = () => {
    // 검색 버튼을 클릭했을 때 실행되는 함수
    // 검색어에 해당하는 할 일 항목만 보여주도록 todoList를 필터링
    const filteredTodos = todoList.filter((todo) => todo.text.includes(searchText));
    console.log(filteredTodos);
    // 필터링된 할 일 목록을 설정합니다.
    setFilteredTodoList(filteredTodos);
  };

  //추가
  const addTodo = () => {
    const newTodo = {
      text: inputText,
      color: activeColor,
    };
    setTodoList([...todoList, newTodo]);
    setInputText("");
  };

  useEffect(() => {
    // 검색창이 비어져있을 때는 todoList가 보여야하고 검색버튼 눌렸을 때는 filteredList가 보이도록
    if (searchText.length == 0 || !searchText) {
      setFilteredTodoList([...todoList]);
    }
  }, [searchText, todoList]);

  // 삭제에서 원하는 건 => 아이템 클릭 시 삭제
  const handleItemClick = (index) => {
    // 클릭했을 때 index를 매개변수로 받기
    const newTodoList = [...todoList];
    // const newTodoList = todoList.filter((todo, idx) => {
    //   return idx !== index;
    // });
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  // 수정하기 기능 => 수정 버튼이 눌리면 textbox의 readOnly가 해제되게
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
      <div style={{ textAlign: "center" }}>
        <h1>Todo App</h1>
        <div style={{ marginTop: 50, marginBottom: 20 }}>
          <input
            type="text"
            style={{ backgroundColor: activeColor, width: 500 }}
            placeholder="입력"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            value={inputText}
          />
          <button onClick={addTodo}>입력</button>
        </div>
        {/* 검색어 입력창 */}
        <div style={{ marginBottom: 50 }}>
          <input
            type="text"
            placeholder="검색"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText} // 검색어 상태와 연결
          />
          <button onClick={handleSearch}>검색</button>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {colors.map((color) => (
          <div
            key={color} // key 추가
            onClick={() => {
              // 각 원에는 onClick 이벤트 설정
              setActiveColor(color);
            }}
            style={{
              backgroundColor: color,
              width: 10,
              height: 10,
              borderRadius: 10,
              margin: 10,
            }}
          ></div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: 50,
        }}
      >
        <h3>Todo Items</h3>
        <div>
          {filteredTodoList
            // .filter((todo) => todo.text.includes(searchText)) // 검색어로 필터링
            .map((todo, index) => (
              <div
                key={index}
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
                <input
                  id={index}
                  type="text"
                  // defaultValue={todo.text}
                  value={todo.text}
                  readOnly={true}
                  // ref={ref}
                  // onChange={(e) => (todo.text = e.target.value)}
                  onChange={(e) => {
                    console.log(e);
                    setEditText(e.target.value);
                    setFilteredTodoList(
                      filteredTodoList.map((filteredTodo, idx) =>
                        index === idx ? { ...filteredTodo, text: e.target.value } : filteredTodo,
                      ),
                    );
                  }}
                />
                <button onClick={() => handleItemClick(index)}>삭제</button>
                <button onClick={() => handleEditClick(index)}>수정</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
