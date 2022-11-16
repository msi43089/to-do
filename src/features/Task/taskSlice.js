import { createSlice, current } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: { work: { id: 1, text: "this is a task" } },
  reducers: {
    addTask: (state, action) => {
      console.log(current(state));
    },
    removeTask: (state, action) => {},
    editTask: (state, action) => {},
  },
});

export const { addTask } = taskSlice.actions;

export const selectAddTask = (state) => state.task;

export default taskSlice.reducer;
