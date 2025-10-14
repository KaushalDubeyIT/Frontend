import { createSlice } from "@reduxjs/toolkit";

const registrationSlice = createSlice({
  name: "registration",
  initialState: {
    data: [],
  },
  reducers: {
    addRegistration: (state, action) => {
      state.data.push(action.payload);
    },
    deleteRegistration: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    updateRegistration: (state, action) => {
      const index = state.data.findIndex((i) => i.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
  },
});

export const { addRegistration, deleteRegistration, updateRegistration } =
  registrationSlice.actions;
export default registrationSlice.reducer;
