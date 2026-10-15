import React from "react";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div>
      <h1>This is Navbar</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
