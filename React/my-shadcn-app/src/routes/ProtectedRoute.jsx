import { AppStore } from "@/context/AppContext";
import { useContext } from "react";
import { Navigate } from "react-router";

const PortectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AppStore);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PortectedRoute;