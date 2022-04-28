import { configureStore } from "@reduxjs/toolkit";
import entities from "./store/entities";

const store = configureStore({
  reducer: {
    entities,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
