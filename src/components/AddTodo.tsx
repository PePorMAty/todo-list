import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { addTodo } from "../store/slices/todosSlice";
import closeImg from "../assets/close.png";

const AddTodo = () => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useAppDispatch();

  const handleChangeValue = (value: string) => {
    setValue(value);
  };

  const handleAddTask = () => {
    if (value === "") {
      alert("Field is empty");
      setActive(false);
    } else {
      setActive(false);
      dispatch(addTodo(value));
      setValue("");
    }
  };

  console.log(value);

  return (
    <div
      className={
        active
          ? "fixed top-0 left-0 z-10 flex  w-full h-full justify-center items-center bg-zinc-800/70"
          : ""
      }
    >
      {active && (
        <div className="fixed top-20 left-1/4 ml-24 h-60 w-2/5 bg-zinc-900 rounded-xl z-20">
          <div className="flex justify-center items-center h-full">
            <input
              className="h-10 w-96 rounded-lg px-3 text-zinc-700"
              type="text"
              placeholder="Add todo"
              value={value}
              onChange={(e) => handleChangeValue(e.target.value)}
            />
            <button
              className="ml-10 rounded-lg bg-cyan-600 px-4 py-1 hover:opacity-80"
              onClick={() => handleAddTask()}
            >
              Add
            </button>
          </div>
        </div>
      )}
      {active ? (
        <div
          className="
    fixed right-20 bottom-10 text-5xl bg-cyan-600 w-14 h-14 rounded-full cursor-pointer hover:opacity-80
    "
          onClick={() => setActive(false)}
        >
          <img className="w-7 h-7 ml-3.5 mt-3.5" src={closeImg} alt="close" />
        </div>
      ) : (
        <div
          className="
    fixed right-20 bottom-10 text-5xl bg-cyan-600 pb-2.5  px-3 rounded-full cursor-pointer hover:opacity-80
    "
          onClick={() => setActive(true)}
        >
          +
        </div>
      )}
    </div>
  );
};

export default AddTodo;
