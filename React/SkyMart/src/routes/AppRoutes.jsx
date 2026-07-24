import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      element: <PublicRoute />,
      children: [
        {
          path: "/",
          element: <AuthLayout />,
          children: [
            {
              index: true,
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
      element: <ProtectedRoute />,
      children: [
        {
          path: "/main",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "shop",
              element: <Shop />,
            },
            {
              path: "about",
              element: <About />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
