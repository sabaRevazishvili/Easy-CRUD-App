import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Input from "./pages/Input";
import LocalStExer from "./pages/LocalStExer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/input" element={<Input />} />
        <Route path="/LocalStorageExercise" element={<LocalStExer />} />
      </Routes>
    </>
  );
}

export default App;
