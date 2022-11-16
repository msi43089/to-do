import { configureStore } from "@reduxjs/toolkit";
import listNameReducer from "../features/AddList/addListSlice";
import addTaskReducer from "../features/Task/taskSlice";

export default configureStore({
  reducer: {
    listName: listNameReducer,
    addTask: addTaskReducer,
  },
});
