import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, clearAll } from "../Todo/todoSlice";

function TodoApp() {
  const [task, setTask] = useState("");
  const todos = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim() !== "") {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1> Simple TODO App</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={() => dispatch(clearAll())}>Clear All</button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => dispatch(deleteTodo(index))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
