import React from "react";
import "../app/App.css";
import { selectList, deleteListName } from "../features/addListSlice";
import { useSelector, useDispatch } from "react-redux";

export default function List({ styling }) {
  const list = useSelector(selectList);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    console.log(e);
    dispatch(deleteListName(e.target.value));
  };

  console.log(styling);

  const listNames = list.map((item) => {
    return (
      <div className={`${styling}-listNames`}>
        <div>{item}</div>
        <button onClick={handleDelete} value={item}>
          X
        </button>
      </div>
    );
  });

  return (
    <div className={`${styling}-list`}>
      <h3 className={`${styling}-title`}>To-Do Group</h3>
      <div>{listNames}</div>
    </div>
  );
}
