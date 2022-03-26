import { useState } from "react";
import "./AddTodo.scss";
import { v4 as uuid } from "uuid";

const AddTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    const newTodo = { id: uuid(), text: inputValue };
    const updatedTodoList = [...todoList, newTodo];
    setTodoList(updatedTodoList);
    setInputValue("");
  };

  console.log(todoList);

  return (
    <div className="add-todo">
      <button onClick={addTodo}> + </button>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="add new todo..."
      ></input>
    </div>
  );
};

export default AddTodo;
