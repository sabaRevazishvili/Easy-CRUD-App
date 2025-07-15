import React from "react";
import { useAppContext } from "../context/useAppContext";
import { editAction, setInputValueAction } from "../context/actionCreator";

const Input = ({ action }) => {
  const [state, dispatch] = useAppContext();

  const actionsMap = {
    setText: (value) => setInputValueAction(value),
    SetEditText: (value) => editAction(value),
  };
  const actionHandle = actionsMap[action];
  return (
    <>
      <input
        autoComplete="off"
        type="text"
        value={action === "setText" ? state.inputValue : state.editedText}
        placeholder={action === "setText" ? "Enter ToDo" : ""}
        disabled={ state.editId !== null}
        onChange={(e) => {
          dispatch(actionHandle(e.target.value));
        }}
        className="border p-2 rounded w-60"
      />
    </>
  );
};

export default Input;
