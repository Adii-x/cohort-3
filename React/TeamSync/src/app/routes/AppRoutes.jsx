import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../../features/auth/ui/pages/LoginPage";
import RegisterPage from "../../features/auth/ui/pages/RegisterPage";
import DashboardLayout from "../layouts/DashboardLayout";
import HomePage from "../../features/dashboard/ui/pages/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMe } from "../../features/auth/state/auth/authAction";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute";
import PublicRoute from "./ProtectedRoutes/PublicRoute";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((store) => store.theme);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (mode === "light") {
      document.body.classList.add("light");
      return;
    }

    document.body.classList.remove("light");
  }, [mode]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <DashboardLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
