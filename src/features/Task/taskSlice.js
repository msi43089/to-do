import { createSlice, current } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    todo: {
      work: [
        { id: 1, text: "Do work" },
        { id: 2, text: "Go home" },
      ],
      chores: [
        { id: 1, text: "Clean dishes" },
        { id: 2, text: "Vacuum" },
      ],
    },
  },
  reducers: {
    addTask: (state, action) => {
      const name = action.payload.listName;
      //id counter assumes last item in array is highest id
      if (Object.keys(state.todo).includes(name)) {
        const currentTodo = state.todo[name];
        const idCount = currentTodo[currentTodo.length - 1].id;
        state.todo[name].push({ id: idCount + 1, text: action.payload.text });
      } else {
        state.todo = {
          ...state.todo,
          [name]: [{ id: 1, text: action.payload.text }],
        };
      }
    },
    removeTask: (state, action) => {
      /*  const name = action.payload[listName];
      state.todo = {
        ...state,
        [name]: state.todo[action.payload.listName].filter(
          (todo) => todo.id !== action.payload.id
        ),
      };*/
    },
    editTask: (state, action) => {},
  },
});

export const { addTask } = taskSlice.actions;

export const selectAddTask = (state) => state.task;

export default taskSlice.reducer;
