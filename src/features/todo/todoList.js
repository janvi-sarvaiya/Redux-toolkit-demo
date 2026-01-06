import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialValue = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: { 
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        completed: false,
      };
      state.push(newTodo);
      console.log(newTodo);
    },
    deleteTodo: (state, action) => {
      const removeId = state.filter(({ id }) => id !== action.payload);
      return removeId;
    },
    isCompleted: (state, action) => {
      const updateId = state.find(({ id }) => id === action.payload);
      if (updateId) {
        updateId.completed = !updateId.completed;
      }
    },
    updateTodo: (state, action) => {
      const { id, task } = action.payload;
      const updateId = state.find(({ id: newId }) => newId === id);
      if (updateId) {
        updateId.task = task;
      }
    },
  },
});

export const { addTodo, deleteTodo, isCompleted, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
