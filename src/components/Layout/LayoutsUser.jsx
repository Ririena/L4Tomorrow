import React from "react";
import HeaderMobile from "../Navigation/HeaderMobile";
import { supabase } from "../../utils/supabase";
export default function LayoutsUser(props) {

 
  return (
    <main>
      <section>
        <div>
        <HeaderMobile>
        {props.children}
        </HeaderMobile>
        </div>
      </section>
    </main>
  );
}
