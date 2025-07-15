import React from "react";
import { useAppContext } from "../context/useAppContext";
import { addAction } from "../context/actionCreator";
import Input from "./Input";

const MainInput = () => {
  const [state, dispatch] = useAppContext();
  console.log(state);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addAction());
      }}
      className="flex flex-col items-center justify-center gap-5 border-2 border-blue-500 p-5"
    >
      <label htmlFor="inputField" className="text-lg font-semibold">
        Enter ToDo
      </label>
      <Input action="setText" />
      <button
        type="submit"
        disabled={!state.inputValue.trim()}
        className={`text-white px-4 py-1 rounded transition-colors duration-300
          ${
            !state.inputValue.trim()
              ? "bg-gray-400  hover:bg-gray-500 cursor-not-allowed"
              : "bg-blue-500  hover:bg-blue-600"
          } `}
      >
        add
      </button>
    </form>
  );
};

export default MainInput;
