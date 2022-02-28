import Task from "./Task";

const TaskList = ({ todos, setTodos }) => {
  const onDeleteClick = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="gap-2 flex flex-col p-2 max-w-sm">
      {todos.map((task) => (
        <Task onDeleteClick={onDeleteClick} key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TaskList;
