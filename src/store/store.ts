import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import todosSlice from "./slices/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
