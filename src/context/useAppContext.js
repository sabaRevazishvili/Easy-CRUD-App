import { useContext } from "react";
import AppContext from "./appContext"; // ✅ not the provider!

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    console.warn("app context error");
  }
  return context;
};
