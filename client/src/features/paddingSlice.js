import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  padding: "md:ml-64 ml-0 p-6",
  sidebarClicked: false,
};

export const paddingSlice = createSlice({
  name: "padding",
  initialState,
  reducers: {
    setPadding: (state, action) => {
      state.padding = action.payload;
    },
    setSidebarClicked: (state, action) => {
      state.sidebarClicked = action.payload;
    },
    resetPadding: (state) => initialState,
  },
});

export const { setPadding, setSidebarClicked, resetPadding } = paddingSlice.actions;
export default paddingSlice.reducer;
