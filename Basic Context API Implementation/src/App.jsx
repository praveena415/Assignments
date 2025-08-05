import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import NestedComponent from "./components/NestedComponent";
import "./index.css";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app-container ${theme}`}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <NestedComponent />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemeToggler />
    </ThemeProvider>
  );
};

export default App;
