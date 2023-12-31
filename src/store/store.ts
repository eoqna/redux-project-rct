import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../slices/countSlice";

const store = configureStore({
  reducer: {
    count: countReducer,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;