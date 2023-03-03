import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += Math.floor(Math.random() * 10);
    },
    decrease: (state) => {
      state.value -= 1;
    },
  },
});


export const { increment, decrease } = counterSlice.actions;
export default counterSlice.reducer;

