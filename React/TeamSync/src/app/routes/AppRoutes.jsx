import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";

const AppRoutes = () => {
  const router = createBrowserRouter([]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
