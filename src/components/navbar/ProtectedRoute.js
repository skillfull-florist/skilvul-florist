import { useContext } from "react";
import { UserContext } from "./../../context/UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, loginOnly = true }) => {
  const { user } = useContext(UserContext);

  if (!user.isLogin && loginOnly) {
    return <Navigate to="/login" />;
  }

  if (user.isLogin && !loginOnly) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
