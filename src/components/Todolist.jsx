import React, { useState } from "react";
import {
  addTodo,
  deleteTodo,
  isCompleted,
  updateTodo,
} from "../features/todo/todoList";
import { useDispatch, useSelector } from "react-redux";

export default function Todolist() {
  const editUser = {
    edit: false,
    editId: null,
  };
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo);
  const [task, setTask] = useState("");
  const [isEdit, setIsEdit] = useState(editUser);

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim() === "") {
      alert("please enter a task!");
      return;
    }

    if (isEdit.edit) {
      dispatch(updateTodo({ id: isEdit.editId, task }));
      setIsEdit(editUser);
    } else {
      dispatch(addTodo(task));
    }
    setTask("");
  }

  function handleEdit(id, task) {
    setIsEdit({ edit: true, editId: id });
    setTask(task);
  }

  return (
    <div className="todo-list">
      <h1>To-Do List App</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter Task"
        />
        <button type="submit">
          {isEdit.edit ? "update Task" : "Add task"}
        </button>
        {isEdit.edit && (
          <button
            onClick={() => {
              setIsEdit(editUser);
              setTask("");
            }}
          >
            Cancel
          </button>
        )}
      </form>
      <table border={1} style={{ marginTop: "20px" }} className="todo-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map(({ id, task, completed }) => (
            <tr key={id} className="todo-item">
              <td style={{ textDecoration: completed ? "line-through" : "" }}>
                {task}
              </td>
              <td>
                <button
                  onClick={() => dispatch(deleteTodo(id))}
                  disabled={!completed}
                >
                  Delete
                </button>{"  "}
                <button
                  onClick={() => handleEdit(id, task)}
                  disabled={completed}
                >
                  Edit
                </button>
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={completed}
                  disabled={completed}
                  onChange={() => dispatch(isCompleted(id))}
                />
                {completed ? "Completed" : "Not Completed"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
