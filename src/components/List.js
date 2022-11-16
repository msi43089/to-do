import React from "react";
import { useParams } from "react-router-dom";
import Task from "../features/Task/Task";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../features/Task/taskSlice";

export default function List() {
  const { taskId } = useParams();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask({ listName: "job", text: "adsfadsf" }));
  };

  return (
    <div className="list">
      <div className="list-title">{taskId}</div>
      <form className="task-form" onSubmit={handleSubmit}>
        <label>Add a Task</label>
        <div className="task-inputs">
          <input type="text" placeholder="Enter a task" id="task" />
          <input type="submit" value="Add" className="taskBtn" />
        </div>
      </form>
      <Task />
    </div>
  );
}
