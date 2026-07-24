import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) {
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
