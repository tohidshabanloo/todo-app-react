import "./TodoList.scss";

const TodoList = ({ todoList }) => {
  
  return (
    <div className="todosList ">
      {todoList.map((item, i) => (
        <div key={item.id} className="todo ">
          {i + 1} .{item.text}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
