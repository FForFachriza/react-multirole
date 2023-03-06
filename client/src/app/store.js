import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import authReducer from "../features/authSlice";
import paddingReducer from "../features/paddingSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authReducer,
    padding: paddingReducer,
  },
});

console.log(store.getState());