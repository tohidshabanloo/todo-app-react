import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTodo />
    </div>
  );
}

export default App;
