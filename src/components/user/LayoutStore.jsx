import React from "react";
import { Outlet } from "react-router-dom";

export default function LayoutStore() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
