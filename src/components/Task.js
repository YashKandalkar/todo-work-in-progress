import React from "react";

const Task = ({ id, title, completed, onDeleteCLick }) => {
  return (
    <div className="bg-gray-200 p-2 rounded-md flex w-80 flex-row justify-between items-center">
      <div className="flex items-center">
        <input type="checkbox" className="mr-2" />
        <p className="text-sm">{title}</p>
      </div>
      <button
        onClick={() => onDeleteCLick(id)}
        className="px-2 bg-red-200 rounded-sm text-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
