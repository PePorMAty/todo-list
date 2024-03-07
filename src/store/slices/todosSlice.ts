import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "../../types";

const initialState: IInitialState = {
  todos: [
    {
      id: 1,
      isComplite: false,
      text: "Todo 1",
    },
    { id: 2, isComplite: false, text: "Todo 2" },
    { id: 3, isComplite: false, text: "Todo 3" },
    { id: 4, isComplite: false, text: "Todo 4" },
    { id: 5, isComplite: false, text: "Todo 5" },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    onComplite: (state, { payload }) => {
      state.todos.forEach((elem) => {
        if (elem.id === +payload) {
          elem.isComplite = !elem.isComplite;
        }
      });
    },
    onDelete: (state, { payload }) => {
      let filteredTodos = state.todos.filter((elem) => elem.id !== +payload);
      state.todos = filteredTodos;
    },
    addTodo: (state, { payload }) => {
      let id = 0;
      state.todos[0]
        ? state.todos[0].id >= 6
          ? (id = state.todos[0].id + 1)
          : (id = state.todos[state.todos.length - 1].id + 1)
        : (id += 1);

      let obj = {
        id,
        isComplite: false,
        text: payload,
      };

      state.todos.push(obj);
    },
    editTodo: (state, { payload }) => {
      state.todos.forEach((elem) => {
        if (elem.id === +payload.id) {
          elem.text = payload.value;
        }
      });
    },
  },
});

export const { onComplite, onDelete, addTodo, editTodo } = todosSlice.actions;

export default todosSlice.reducer;
