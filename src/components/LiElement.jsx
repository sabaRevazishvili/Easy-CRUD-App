import React from "react";
import Button from "./Button";

const LiElement = ({ id, text }) => {

  return (
    <li className="my-2 grid grid-cols-3 items-center gap-5">
      <p className="text-center">{text}</p>
      <Button text="remove" action="remove" params={{ id: id }} />
      <Button text="edit" action="edit" params={{ id: id, para: text }} />
    </li>
  );
};

export default LiElement;
