import { configureStore } from "@reduxjs/toolkit";
import listNameReducer from "../features/addListSlice.js";

export default configureStore = ({
  reducer: {
    listName: listNameReducer,
  },
})
