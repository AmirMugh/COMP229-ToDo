import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const MyProfile = () => {
  const { user } = useAuth();
  const [formattedDate, setFormattedDate] = useState("");

  // Helper to format ISO string
  const formatDate = (iso) => {
    try {
      const date = new Date(iso);
      return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    } catch {
      return "Unknown";
    }
  };

  useEffect(() => {
    if (user?.createdAt) {
      setFormattedDate(formatDate(user.createdAt));
    }
  }, [user]);

  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="card p-4 shadow-sm theme-card">
        <h2 className="mb-3">My Profile</h2>
        <p><strong>Username:</strong> {user?.username || "Unknown"}</p>
        <p><strong>Status:</strong> Authenticated</p>
        <p><strong>Member Since:</strong> {formattedDate || "Unknown"}</p>
      </div>
    </motion.div>
  );
};

export default MyProfile;
