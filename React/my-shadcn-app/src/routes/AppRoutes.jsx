import { Dashboard } from "@/components/Dashboard";
import { LoginForm } from "@/components/login-form";
import { SignUpForm } from "@/components/signup-form";
import React from "react";
import { Route, Routes } from "react-router";
import PortectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <LoginForm />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <SignUpForm />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PortectedRoute>
              <Dashboard />
            </PortectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
