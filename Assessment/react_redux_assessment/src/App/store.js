import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "../Features/registrationSlice";

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
  },
});
