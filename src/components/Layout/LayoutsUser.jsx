import React from "react";
import HeaderMobile from "../Navigation/HeaderMobile";
import { supabase } from "../../utils/supabase";
export default function LayoutsUser(props) {

  async function retrieveUser() {
    try {
      const { data: { user }, error } = await supabase.auth.getUser();
  
      if (error) {
        throw error;
      }
  
      console.log("Data Pengguna:", user);
      console.log(user.user_metadata)
  
      // Lakukan operasi lainnya di sini, seperti menampilkan data pengguna ke pengguna atau melakukan pemrosesan lainnya
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  retrieveUser();
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
