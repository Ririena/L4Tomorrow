import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Divider } from "@nextui-org/react";
import Sidebar from "../admin/Sidebar";
import Draw from "../Navigation/Drawer";
import DrawAdmin from "../Navigation/DrawAdmin";
export default function LayoutsAdmin() {
  return (
    <>
    
        <Navbar className="bg-slate-100 flex justify-center border-b-1 shadow-sm" >
          <h1 className="font-bold text-inherit">L4Tomorow</h1>
          <li></li>
          <li></li>
          <DrawAdmin/>
        </Navbar>
      <Sidebar/>
      <Outlet />
    </>
  );
}
