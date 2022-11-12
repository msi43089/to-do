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
    },
    addListName: (state, action) => {
      state.list.push(state.create);
      state.create = "";
    },
    deleteListName: (state, action) => {
      state.list = state.list.filter((item) => {
        return item !== action.payload;
      });
    },
  },
});

export const { createListName, addListName, deleteListName } =
  listNameSlice.actions;

export const selectListName = (state) => state.listName.create;

export const selectList = (state) => state.listName.list;

export default listNameSlice.reducer;
