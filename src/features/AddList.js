import React from "react";
import "../app/App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectListName, createListName, addListName } from "./addListSlice";

export default function AddList() {
  const dispatch = useDispatch();
  const listName = useSelector(selectListName);

  const handleListNameChange = (e) => {
    dispatch(createListName(e.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addListName(listName));
  };

  return (
    <div className="addList">
      <form onSubmit={handleSubmit}>
        <label>Enter your list name:</label>
        <input
          id="listName"
          type="text"
          onChange={handleListNameChange}
          value={listName}
        />
        <input className="submitBtn" type="submit" value="Create List" />
      </form>
    </div>
  );
}
