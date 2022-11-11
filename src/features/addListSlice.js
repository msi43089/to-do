import { createSlice } from "@reduxjs/toolkit";

export const addListSlice = createSlice({
  name: "addList",
  initialState: "",
  reducers: {
    addListItem: (state, action) => {
      state = action.payload
    },
  },
});

export const { addListItem } = addListSlice.actions;

export const selectListItem = (state) => state.addList;

export default addListSlice.reducer;
