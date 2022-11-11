import { createSlice } from "@reduxjs/toolkit";

export const listNameSlice = createSlice({
  name: "listName",
  initialState: "",
  reducers: {
    createListName: (state, action) => {
      state = action.payload
    },
  },
});

export const { createListName } = listNameSlice.actions;

export const selectListName = (state) => state.listName;

export default listNameSlice.reducer;
