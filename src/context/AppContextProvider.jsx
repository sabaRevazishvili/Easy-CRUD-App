import React, { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import AppContext from "./appContext"; // ✅ correct import



// ✅ Provider component
const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};


export default AppContextProvider;
