import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/Counter/counterSlice";
import todoReducer from "../Features/Todo/todoSlice";
import crudReducer from "../Features/CRUD/crudSlice";

export const store = configureStore({
  reducer: {
    count: counterReducer,
    todos: todoReducer,
    crud: crudReducer
  },
});
