import React from "react";
import { useAuth } from "../AuthContext";

const Footer = () => {
  const { isLoggedIn } = useAuth();

  return (
    <footer style={{ padding: "1rem", background: "#ddd" }}>
      {isLoggedIn ? "Welcome, User" : "Please log in"}
    </footer>
  );
};

export default Footer;
