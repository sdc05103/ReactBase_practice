import React from "react";
import Colorbar from "./Colorbar";
import TodoInput from "./TodoInput";
import TodoSearchInput from "./TodoSearchInput";
import TodoList from "./Todolist";

// const colors = ["red", "yellow", "pink", "violet"];

export default function TodoApp() {
  // const [todoList, setTodoList] = useState([]);
  // const [activeColor, setActiveColor] = useState(colors[0]);
  // const [inputText, setInputText] = useState("");
  // const [searchText, setSearchText] = useState("");
  // const [filteredTodoList, setFilteredTodoList] = useState([]);
  // const [editText, setEditText] = useState("");
  // const [editIndex, setEditIndex] = useState(null);

  // const { todoList } = useTodo();

  // useEffect(() => {
  //   if (todoList && todoList.length > 0) {
  //     localStorage.setItem("todoList", JSON.stringify(todoList));
  //   }
  // }, [todoList]);

  // useEffect(() => {
  //   const storedTodoList = JSON.parse(localStorage.getItem("todoList"));
  //   if (storedTodoList) {
  //     setTodoList(storedTodoList);
  //   }
  // }, []);

  // useEffect(() => {
  //   // 검색창이 비어져있을 때는 todoList가 보여야하고 검색버튼 눌렸을 때는 filteredList가 보이도록
  //   if (searchText.length == 0 || !searchText) {
  //     setFilteredTodoList([...todoList]);
  //   }
  // }, [searchText, todoList]);

  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", margin: 100 }}>
      <div style={{ textAlign: "center" }}>
        <h1>Todo App</h1>
        <TodoInput />
        <TodoSearchInput />
      </div>
      <Colorbar />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: 50 }}>
        <h3>Todo Items</h3>
        <TodoList />
      </div>
    </div>
  );
}
