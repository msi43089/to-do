import React from "react";
import { useParams } from "react-router-dom";

export default function List() {
  const { taskId } = useParams();

  return <div>test {taskId}</div>;
}
