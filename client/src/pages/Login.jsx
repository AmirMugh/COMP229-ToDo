import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { username, password });
      const token = res.data.token;
  
      localStorage.setItem("token", token);    // Store token
      login(token);                            // Notify context with token
  
      navigate("/tasks");                      // Go to tasks page
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className={`d-flex flex-column min-vh-100 ${darkMode ? "bg-dark" : "bg-light"}`} style={{ justifyContent: "center" }}>
      <main className="flex-grow-1 d-flex align-items-center justify-content-center py-5">
        <div
          className="card shadow p-4 w-100 text-center my-5"
          style={{
            maxWidth: "400px",
            backgroundColor: darkMode ? "#1f1f1f" : "#fff",
            color: darkMode ? "#eee" : "#000",
            border: darkMode ? "1px solid #444" : "1px solid #ccc"
          }}
        >
          <h2 className="mb-4 fw-bold">Login</h2>
          <form onSubmit={handleLogin} className="d-flex flex-column">
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
              Login
            </button>
          </form>
          <p className="mt-3 text-center" style={{ color: darkMode ? "#ccc" : "#333" }}>
            New here? <Link to="/signup" style={{ color: darkMode ? "#4dabf7" : "#007bff" }}>Sign up</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
