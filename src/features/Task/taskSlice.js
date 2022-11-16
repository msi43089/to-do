import { createSlice, current } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    work: [
      { id: 1, text: "Do work" },
      { id: 2, text: "Go home" },
    ],
    chores: [
      { id: 1, text: "Clean dishes" },
      { id: 2, text: "Vacuum" },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      const name = action.payload.listName;
      if (Object.keys(state).includes(name)) {
        state[name].push({ id: 5, text: action.payload.text });
      } else {
        const newState = { ...state, [name]: [{ id: 1, text: action.payload.text }] };
        console.log(newState);
        state = newState
      }
    },
    removeTask: (state, action) => {},
    editTask: (state, action) => {},
  },
});

export const { addTask } = taskSlice.actions;

export const selectAddTask = (state) => state.task;

export default taskSlice.reducer;
