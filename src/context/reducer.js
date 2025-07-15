import {
  SET_INPUT_VALUE,
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  SAVE_TODO,
  CLEAR_TODO,
  EDIT_ID,
} from "./actions";

const initialState = {
  inputValue: "",
  todos: [],
  editId: null,
  editedText: "",
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: state.inputValue }],
        inputValue: "",
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    case EDIT_ID:
      return {
        ...state,
        editId: payload.id,
        editedText: payload.text,
      };
    case EDIT_TODO:
      return {
        ...state,
        editedText: payload,
      };
    case SAVE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, text: state.editedText } : todo
        ),
        editId: null,
        editedText: "",
      };
    case CLEAR_TODO:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export { reducer, initialState };
