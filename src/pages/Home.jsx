import React from "react";
import MainInput from "../components/MainInput";
import EditLiElement from "../components/EditLiElement";
import LiElement from "../components/LiElement";
import Button from "../components/Button";
import { useAppContext } from "../context/useAppContext";

const Home = () => {
  const [state] = useAppContext();

  return (
    <main className="h-screen flex justify-center items-center gap-6">
      <MainInput />
      {state.todos.length > 0 && (
        <ul>
          {state.todos.map((todo) =>
            state.editId === todo.id ? (
              <EditLiElement id={todo.id} key={todo.id} />
            ) : (
              <LiElement id={todo.id} text={todo.text} key={todo.id} />
            )
          )}
        </ul>
      )}
      {state.todos.length > 1 && <Button text="clear" action="clear" />}
    </main>
  );
};

export default Home;
