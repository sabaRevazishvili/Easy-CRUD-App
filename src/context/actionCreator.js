import {
  SET_INPUT_VALUE,
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  SAVE_TODO,
  CLEAR_TODO,
  EDIT_ID,
} from "./actions";

const setInputValueAction = (value) => {
  return {
    type: SET_INPUT_VALUE,
    payload: value,
  };
};

const addAction = () => {
  return {
    type: ADD_TODO,
  };
};

const removeAction = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

const editIdAction = (id, text) => {
  return {
    type: EDIT_ID,
    payload: { id, text },
  };
};

const editAction = (text) => {
  return {
    type: EDIT_TODO,
    payload: text,
  };
};

const saveAction = (id) => {
  return {
    type: SAVE_TODO,
    payload: id,
  };
};

const clearAction = () => {
  return {
    type: CLEAR_TODO,
  };
};

export {
  setInputValueAction,
  addAction,
  removeAction,
  editAction,
  saveAction,
  clearAction,
  editIdAction,
};
