import React from "react";
import { useAuth } from "../AuthContext";

const Main = () => {
  const { isLoggedIn } = useAuth();

  return (
    <main style={{ padding: "1rem" }}>
      {isLoggedIn
        ? "You are logged in. Enjoy your session!"
        : "You are logged out. Please log in to continue."}
    </main>
  );
};

export default Main;
