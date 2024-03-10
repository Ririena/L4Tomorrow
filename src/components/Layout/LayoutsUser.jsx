import React from "react";
import HeaderMobile from "../Navigation/HeaderMobile";
import { supabase } from "../../utils/supabase";
import { Outlet } from "react-router-dom";
export default function LayoutsUser() {
  return (
    <>
      <HeaderMobile>
      </HeaderMobile>
        <Outlet />
    </>
  );
}
