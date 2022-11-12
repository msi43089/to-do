import React from "react";
import "../app/App.css";
import { selectList, deleteListName } from "../features/addListSlice";
import { useSelector, useDispatch } from "react-redux";

export default function List() {
  const list = useSelector(selectList);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    console.log(e);
    dispatch(deleteListName(e.target.value));
  };

  console.log(list);

  const listNames = list.map((item) => {
    return (
      <div className="listNames">
        <div>{item}</div>
        <button onClick={handleDelete} value={item}>
          X
        </button>
      </div>
    );
  });

  return (
    <div className="list">
      <h3>To-Do Group</h3>
      <div>{listNames}</div>
    </div>
  );
}
