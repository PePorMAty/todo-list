import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { editTodo } from "../store/slices/todosSlice";
import deleteImg from "../assets/delete.png";
import compliteImg from "../assets/checked.png";
import removeImg from "../assets/remove.png";
import editImg from "../assets/edit.png";
import confirmImg from "../assets/confirm.png";

interface Props {
  handleComplite:
    | ((id: React.MouseEvent<HTMLButtonElement>) => void)
    | undefined;
  handleDelete: ((id: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  text: string;
  isComplite: boolean;
  id: number;
}

const Todo = ({
  handleComplite,
  handleDelete,
  text,
  isComplite,
  id,
}: Props) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(text);

  const dispatch = useAppDispatch();

  const handleSetActive = () => {
    setActive(!active);
  };

  const handleChangeTodo = (value: string) => {
    setValue(value);
  };

  const handleConfirmEdit = (id: string) => {
    handleSetActive();
    dispatch(editTodo({ value, id }));
  };

  return (
    <li className="mb-10 bg-zinc-700 px-3 py-5 w-3/5 mx-auto rounded-2xl">
      <div className="flex justify-between">
        <button
          id={id.toString()}
          className="cursor-pointer"
          onClick={handleComplite}
        >
          {isComplite ? (
            <img src={removeImg} id={id.toString()} className="w-5 h-5" />
          ) : (
            <img src={compliteImg} id={id.toString()} className="w-5 h-5" />
          )}
        </button>
        {active ? (
          <input
            className="h-10 w-96 rounded-lg px-3 text-zinc-700"
            type="text"
            placeholder="Edit"
            value={value}
            id={id.toString()}
            onChange={(e) => handleChangeTodo(e.target.value)}
          />
        ) : (
          <div
            className={`px-10 max-w-2xl ${isComplite ? "line-through" : ""}`}
          >
            {text}
          </div>
        )}

        <div className="div">
          {active ? (
            <button
              className="cursor-pointer mr-3 mb-5"
              onClick={(e) => handleConfirmEdit((e.target as HTMLElement).id)}
              id={id.toString()}
            >
              <img src={confirmImg} id={id.toString()} className="w-5 h-5" />
            </button>
          ) : (
            <button
              className="cursor-pointer mr-3 mb-5"
              onClick={handleSetActive}
              id={id.toString()}
            >
              <img src={editImg} id={id.toString()} className="w-5 h-5" />
            </button>
          )}

          <button
            className="cursor-pointer"
            onClick={handleDelete}
            id={id.toString()}
          >
            <img src={deleteImg} id={id.toString()} className="w-5 h-5" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Todo;
