import { createSlice, current } from "@reduxjs/toolkit";

export const listNameSlice = createSlice({
  name: "listName",
  initialState: {
    create: "",
    list: [],
  },
  reducers: {
    createListName: (state, action) => {
      state.create = action.payload;
      console.log(current(state));
    },
    addListName: (state, action) => {
      state.list.push(state.create)
      state.create = ""
    },
  },
});

export const { createListName } = listNameSlice.actions;

export const selectListName = (state) => state.listName.create;

export default listNameSlice.reducer;
