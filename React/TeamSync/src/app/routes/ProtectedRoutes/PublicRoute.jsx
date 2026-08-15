import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import Loding from "../../../shared/ui/pages/Loding";

const PublicRoute = () => {
  const { employee, isLoding } = useSelector((store) => store.auth);

  if (isLoding) return <Loding />;

  if (employee) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
};

export default PublicRoute;
