import React, { useState } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editedText, setEditedText] = useState("");

  // console.log(inputValue);
  const addHandler = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      return;
    }

    const newToDo = {
      id: Date.now(),
      text: inputValue,
    };

    setTodos([...todos, newToDo]);
    setInputValue("");
  };

  const removeHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearAllHandler = () => {
    setTodos([]);
  };

  const editHandler = (id, text) => {
    setEditId(id);
    setEditedText(text);
  };

  const saveHandler = (id) => {
    setEditId(null);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editedText } : todo
      )
    );
  };
  return (
    <>
      <form
        onSubmit={addHandler}
        className="flex flex-col items-center justify-center gap-5 border border-blue-950"
      >
        <label htmlFor="inputField" className="text-lg font-semibold">
          Enter ToDo
        </label>
        <input
          id="inputField"
          placeholder="enter"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border p-2 rounded w-60"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          add
        </button>
      </form>
      {todos.length > 0 && (
        <ul>
          {todos.map((todo) =>
            editId === todo.id ? (
              <li
                className="my-2 grid grid-cols-3 items-center gap-5"
                key={todo.id}
              >
                <input
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  className="border p-2 rounded"
                />
                <button
                  onClick={() => saveHandler(todo.id)}
                  className="bg-yellow-500 text-white px-4 py-1 ml-4 rounded hover:bg-yellow-600"
                >
                  Save
                </button>
              </li>
            ) : (
              <li
                className="my-2 grid grid-cols-3 items-center gap-5"
                key={todo.id}
              >
                <p className="text-center">{todo.text}</p>
                <button
                  onClick={() => removeHandler(todo.id)}
                  className="bg-red-500 text-white px-4 py-1 ml-4 rounded hover:bg-red-600"
                >
                  remove
                </button>
                <button
                  onClick={() => editHandler(todo.id, todo.text)}
                  className="bg-green-500 text-white px-4 py-1 ml-4 rounded hover:bg-green-600"
                >
                  edit
                </button>
              </li>
            )
          )}
          {todos.length > 1 && (
            <button
              onClick={clearAllHandler}
              className="bg-red-500 text-white px-4 py-1 ml-8 rounded hover:bg-red-600"
            >
              clear all
            </button>
          )}
        </ul>
      )}
    </>
  );
};

export default Input;
