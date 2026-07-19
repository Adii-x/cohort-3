import { AppStore } from "@/context/AppContext";
import { useContext } from "react";
import { Navigate } from "react-router";

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AppStore);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default PublicRoute;
