import "./TodoList.scss";

const TodoList = ({ todoList, setTodoList }) => {
  const handleCompelete = (id) => {
    const updatedTodos = todoList.map((item) =>
      item.id === id ? { ...item, completed: true } : item
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
          <button onClick={() => handleCompelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
