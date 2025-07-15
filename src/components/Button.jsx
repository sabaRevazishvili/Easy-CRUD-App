import React from "react";
import { useAppContext } from "../context/useAppContext";
import {
  addAction,
  clearAction,
  editIdAction,
  removeAction,
  saveAction,
} from "../context/actionCreator";

const Button = ({ text, action, params = {} }) => {
  const colorMap = {
    save: { default: "bg-yellow-500", hover: "bg-yellow-600" },
    add: { default: "bg-blue-500", hover: "bg-blue-600" },
    edit: { default: "bg-green-500", hover: "bg-green-600" },
    remove: { default: "bg-red-500", hover: "bg-red-600" },
    clear: { default: "bg-red-500", hover: "bg-red-600" },
  };

  const actionsMap = {
    save: ({ id }) => saveAction(id),
    add: () => addAction(),
    edit: ({ id, para }) => editIdAction(id, para),
    remove: ({ id }) => removeAction(id),
    clear: () => clearAction(),
  };

  const [, dispatch] = useAppContext();

  const bgColor = colorMap[text];
  const actionHandle = actionsMap[action];

  return (
    <button
      onClick={() => dispatch(actionHandle(params))}
      className={`button ${bgColor.default} hover:${bgColor.hover}`}
    >
      {text}
    </button>
  );
};

export default Button;
