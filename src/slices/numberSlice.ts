import { createSlice } from "@reduxjs/toolkit";

export const numberSlice = createSlice({
  name: "number",
  initialState: {
    value: 1,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -=1;
    }
  }
});

export const { increment, decrement } = numberSlice.actions;

export default numberSlice.reducer;