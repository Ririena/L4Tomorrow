import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "@nextui-org/react";
import Sidebar from "../admin/Sidebar";
export default function LayoutsAdmin() {
  return (
    <>
    
        <Navbar className="bg-violet-50 flex justify-center">
          <li>Logo</li>
          <li></li>
          <li></li>
        </Navbar>
      <Sidebar/>
      <Outlet />
    </>
  );
}
