import { useState, useRef } from "react";
import TaskList from "./TaskList";

const data = [
  { id: 1, title: "Task 1", completed: false },
  {
    id: 2,
    title: `lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem `,
    completed: false,
  },
  { id: 3, title: "Task 3", completed: false },
  { id: 4, title: "Task 4", completed: false },
];

const Home = () => {
  const [todos, setTodos] = useState(data);
  const inputRef = useRef();

  const onAddClick = () => {
    if (inputRef.current.value.trim()) {
      setTodos([
        {
          id: todos.length + 1,
          title: inputRef.current.value,
          completed: false,
        },
        ...todos,
      ]);
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <div className="p-8">
        <h1 className="text-lg">Welcome, Yash</h1>
        <p className="text-sm">
          Create, delete and mark your to-dos as complete!
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <input
            ref={inputRef}
            className="border-2 px-1 mr-4"
            placeholder="Do homework"
          />
          <button
            onClick={onAddClick}
            className="bg-secondary text-gray-900 px-2 py-1 rounded-sm"
          >
            Add
          </button>
        </div>
        <TaskList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default Home;
