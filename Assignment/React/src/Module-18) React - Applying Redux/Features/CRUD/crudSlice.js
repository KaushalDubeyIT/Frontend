import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.list.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.list = state.list.filter((_, index) => index !== action.payload);
    },
    updateItem: (state, action) => {
      const { index, newValue } = action.payload;
      state.list[index] = newValue;
    },
    clearAll: (state) => {
      state.list = [];
    },
  },
});

export const { addItem, deleteItem, updateItem, clearAll } = crudSlice.actions;
export default crudSlice.reducer;
