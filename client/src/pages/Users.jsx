// src/pages/Users.jsx
import { useEffect, useState } from "react";
import API from "../api/axios";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { darkMode } = useTheme();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get("/auth/users");
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="card shadow-sm p-4 mt-4"
        style={{
          backgroundColor: darkMode ? "#1f1f1f" : "#fff",
          color: darkMode ? "#eee" : "#000",
        }}
      >
        <h2 className="mb-4 text-center">Registered Users</h2>
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <ul className="list-group">
            {users.map((user) => (
              <li
                key={user._id}
                className="list-group-item d-flex justify-content-between align-items-center"
                style={{ backgroundColor: "inherit", color: "inherit" }}
              >
                <span>{user.username}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default Users;
