import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="w-100 bg-primary shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid d-flex justify-content-between align-items-center px-4">
          <Link className="navbar-brand fw-bold" to="/">TaskMaster</Link>

          <div className="d-flex gap-2 align-items-center">
            {!user ? (
              <>
                <Link className="btn btn-outline-light" to="/login">Login</Link>
                <Link className="btn btn-outline-light" to="/signup">Signup</Link>
              </>
            ) : (
              <>
                <Link className="btn btn-outline-light" to="/tasks">Tasks</Link>
                <Link className="btn btn-outline-light" to="/users">Users</Link>
                <Link className="btn btn-outline-light" to="/profile">Profile</Link>
                <button className="btn btn-outline-light" onClick={logout}>Logout</button>
              </>
            )}
            <motion.button
              className="btn btn-warning"
              onClick={toggleTheme}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
            </motion.button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;