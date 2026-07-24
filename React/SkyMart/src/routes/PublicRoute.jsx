import React from "react";
import { Navigate, Outlet } from "react-router";

const PublicRoute = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (loggedInUser) {
    return <Navigate to={"/main"} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;