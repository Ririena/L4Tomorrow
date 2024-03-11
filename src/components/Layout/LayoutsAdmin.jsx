import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "@nextui-org/react";
export default function LayoutsAdmin() {
  return (
    <>
      <div className="container">
        <Navbar className="bg-violet-50 flex justify-center">
          <li>Logo</li>
          <li></li>
          <li></li>
        </Navbar>
      </div>
      <Outlet />
    </>
  );
}
