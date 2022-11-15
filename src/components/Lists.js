import React from "react";
import "../app/App.css";
import { selectList, deleteListName } from "../features/addListSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

export default function Lists({ styling }) {
  const list = useSelector(selectList);
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params);

  const handleDelete = (e) => {
    console.log(e);
    dispatch(deleteListName(e.target.value));
  };

  console.log(styling);

  const listNames = list.map((item) => {
    return (
      <div className={`${styling}-listNames`}>
        <Link to={`/lists/${item}`}>
          <div>{item}</div>
        </Link>
        <button onClick={handleDelete} value={item}>
          X
        </button>
      </div>
    );
  });

  return (
    <div className={`${styling}-list`}>
      {styling === "nav" ? (
        <Link to="/lists">
          <h3 className={`${styling}-title`}>To-Do Group</h3>
        </Link>
      ) : (
        <h3 className={`${styling}-title`}>To-Do Group</h3>
      )}
      <div>{listNames}</div>
    </div>
  );
}
