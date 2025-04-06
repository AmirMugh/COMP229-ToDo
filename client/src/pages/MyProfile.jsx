import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MyProfile = () => {
  const [username, setUsername] = useState("Loading...");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUsername(payload.username || "Unknown");
      } catch (err) {
        console.error("Invalid token format", err);
        setUsername("Unknown");
      }
    } else {
      setUsername("Not logged in");
    }
  }, []);

  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="card p-4 shadow-sm theme-card">
        <h2 className="mb-3">My Profile</h2>
        <p><strong>Username:</strong> {username}</p>
        <p><strong>Status:</strong> Authenticated</p>
        <p><strong>Member Since:</strong> Today 🎉</p>
      </div>
    </motion.div>
  );
};

export default MyProfile;