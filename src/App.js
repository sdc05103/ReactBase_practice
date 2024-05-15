import TodoApp from "./components/Todo_list/TodoApp";
import { ThemeProvider } from "./components/Todo_list/TodoContext";

function App() {
  return (
    <div>
      <ThemeProvider>
        <TodoApp />
      </ThemeProvider>
    </div>
  );
}

export default App;
