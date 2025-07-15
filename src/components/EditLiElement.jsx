import React from "react";
import Button from "./Button";
import Input from "./Input";

const EditLiElement = ({ id }) => {
  return (
    <li className="my-2 grid grid-cols-3 items-center gap-5">
      <Input action="setEditText" />
      <Button text="save" action="save" params={{ id: id }} />
    </li>
  );
};

export default EditLiElement;
