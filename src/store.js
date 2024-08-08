import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import factsReducer from "./factsSlice";

export const store = configureStore({
  reducer: {
    facts: factsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
