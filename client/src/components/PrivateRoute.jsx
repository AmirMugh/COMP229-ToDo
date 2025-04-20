import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingScreen from "./LoadingScreen";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <LoadingScreen />;

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
// This component checks if the user is authenticated before rendering the children components. If not, it redirects to the login page.