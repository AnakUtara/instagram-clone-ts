import userSlice from "./slices/user.slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({ auth: userSlice });

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
