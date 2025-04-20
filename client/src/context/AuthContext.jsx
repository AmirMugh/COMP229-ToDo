import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // track loading separately

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("🪪 Stored token on init:", token);

    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      console.log("✅ Decoded token:", decoded);

      if (!decoded.username || !decoded.createdAt) {
        throw new Error("Missing fields");
      }

      setUser({
        id: decoded.id,
        username: decoded.username,
        createdAt: decoded.createdAt,
      });
    } catch (err) {
      console.error("❌ Token decode error", err);
      localStorage.removeItem("token");
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    try {
      const decoded = jwtDecode(token);
      setUser({
        id: decoded.id,
        username: decoded.username,
        createdAt: decoded.createdAt,
      });
    } catch (err) {
      console.error("Invalid token on login", err);
      logout();
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
