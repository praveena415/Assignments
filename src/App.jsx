
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<UserList users={users} />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}