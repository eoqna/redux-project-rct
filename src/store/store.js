import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "../slices/numberSlice";

const store = configureStore({
  reducer: {
    number: numberReducer,
  }
});

export default store;