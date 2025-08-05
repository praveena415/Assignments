import React from "react";
import { useTheme } from "../ThemeContext";

const NestedComponent = () => {
  const { theme } = useTheme();

  return (
    <div className={`nested-box ${theme}`}>
      <p>This is a nested component using the {theme} theme.</p>
    </div>
  );
};

export default NestedComponent;
