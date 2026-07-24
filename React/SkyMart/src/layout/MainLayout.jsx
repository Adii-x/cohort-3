import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
