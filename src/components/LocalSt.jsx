import React, { useState, useEffect } from "react";

const NameSaver = () => {
  const [name, setName] = useState("");

  // Load the name from localStorage when the app starts
  useEffect(() => {
    const saved = localStorage.getItem("name");
    if (saved) setName(saved);
  }, []);

  // Save to localStorage whenever `name` changes
  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <div className="p-5">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="border p-2"
      />
      <p className="mt-2">Hello, {name || "stranger"}!</p>
    </div>
  );
};

export default NameSaver;
