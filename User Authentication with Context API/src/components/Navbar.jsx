import React from "react";
import { useAuth } from "../AuthContext";

const Navbar = () => {
  const { isLoggedIn, toggleAuth } = useAuth();

  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <button onClick={toggleAuth}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </nav>
  );
};

export default Navbar;
