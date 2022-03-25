import { useState } from "react";
import "./AddTodo.scss";

const AddTodo = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="add-todo">
      <button> + </button>
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
