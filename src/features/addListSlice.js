import { createSlice } from "@reduxjs/toolkit";

export const addListSlice = createSlice({
  name: "addList",
  initialState: [],
  reducers: {
    addListItem: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addListItem } = addListSlice.actions;

export const selectListItem = state.addList;

export default addListSlice.reducer;
