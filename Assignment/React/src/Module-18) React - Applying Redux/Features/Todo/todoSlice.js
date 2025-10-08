import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: []
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((item, index) => index !== action.payload);
    },
    clearAll: (state) => {
      state.list = [];
    },
  },
});

export const { addTodo, deleteTodo, clearAll } = todoSlice.actions;
export default todoSlice.reducer;
