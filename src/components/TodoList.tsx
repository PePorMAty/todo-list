import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { onComplite, onDelete } from "../store/slices/todosSlice";
import Todo from "./Todo";

const TodoList = () => {
  const { todos } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const handleComplite = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(onComplite((e.target as HTMLElement).id));
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(onDelete((e.target as HTMLElement).id));
  };

  return (
    <div className="mt-20">
      <ul className="">
        {todos.map((todo) => (
          <Todo
            handleComplite={handleComplite}
            handleDelete={handleDelete}
            text={todo.text}
            isComplite={todo.isComplite}
            key={todo.id}
            id={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
