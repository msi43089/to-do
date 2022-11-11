import React from "react";
import "../app/App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectListName, createListName } from "./addListSlice";

export default function AddList() {
  const dispatch = useDispatch();
  const listName = useSelector(selectListName);
  
  const handleListNameChange = (e) =>{
    dispatch(createListName(e.target.value))
  }
             
  
  return (
    <div className="addList">
      <h1 className="title">Enter your list name here</h1>
      <input 
        id="listName" 
        type="text" 
        placeholder="List Name"
        onChange={handleListNameChange}
        value={listName}
        />
      <br />
      <button>Create List</button>
    </div>
  );
}
