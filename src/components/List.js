import React from "react";
import { useParams } from "react-router-dom";

export default function List() {
  const { taskId } = useParams();

  return (
    <div className="list">
      <div className="list-title">
        <h3>{taskId}</h3>
      </div>
      <form className="task-form">
        <label>Add a Task</label>
        <input type="text" placeholder="Enter a task" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
