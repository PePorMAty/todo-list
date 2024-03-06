import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  return (
    <div className="container ">
      <h1 className="flex mx-auto w-max text-3xl">Todo List</h1>
      <TodoList />
      <AddTodo />
    </div>
  );
}

export default App;
