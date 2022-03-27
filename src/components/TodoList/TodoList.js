import "./TodoList.scss";

const TodoList = ({ todoList, setTodoList }) => {
  const handleCompelete = (id) => {
    const updatedTodos = todoList.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodoList(updatedTodos);
  };
  return (
    <div className="todosList ">
      {todoList.map((item, i) => (
        <div key={item.id} className="todo ">
          <span
            style={{ textDecoration: item.completed ? "line-through" : "" }}
          >
            {i + 1} .{item.text}
          </span>
          <button
            onClick={() => handleCompelete(item.id)}
            style={{
              backgroundColor: item.completed ? "yellow" : "red",
              color: item.completed ? "black" : "white",
            }}
          >
            {item.completed ? "Undone" : "Done"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
