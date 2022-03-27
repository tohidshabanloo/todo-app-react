import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import Footer from "./components/Footer/Footer";

function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <Header />
      <AddTodo todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <Footer />
    </div>
  );
}

export default App;
