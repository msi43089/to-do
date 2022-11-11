import React from "react";
import "../app/App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectListItem, addListItem } from "./addListSlice";

export default function AddList() {
  return (
    <div className="addList">
      <h1 className="title">Enter your list name here</h1>
      <input id="addList" type="text" placeholder="List Item" />
      <br />
      <button>Create List</button>
    </div>
  );
}
