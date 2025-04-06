import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";
import { useTheme } from "../context/ThemeContext";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", { username, password });
      navigate("/login");
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  return (
    <div
      className={`d-flex flex-column min-vh-100 ${darkMode ? "bg-dark" : "bg-light"}`}
    >
      <main className="flex-grow-1 d-flex align-items-center justify-content-center">
        <div
          className="card shadow p-4 w-100 text-center my-5"
          style={{
            maxWidth: "400px",
            backgroundColor: darkMode ? "#1f1f1f" : "#fff",
            color: darkMode ? "#eee" : "#000",
            border: darkMode ? "1px solid #444" : "1px solid #ccc"
          }}
        >
          <h2 className="mb-4 fw-bold">Signup</h2>
          <form onSubmit={handleSignup} className="d-flex flex-column">
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              className="form-control mb-3"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </form>
          <p className="mt-3 text-center" style={{ color: darkMode ? "#ccc" : "#333" }}>
            Already a user? <Link to="/login" style={{ color: darkMode ? "#4dabf7" : "#007bff" }}>Log in</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Signup;
