import React, { useEffect } from "react";
import { supabase } from "../../../utils/supabase.js";

const RetrieveUser = () => {
  useEffect(() => {
    async function fetchUser() {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();
        if (error) {
          throw error;
        }
        console.log("Data Pengguna:", user);
        console.log(user.user_metadata);
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
    fetchUser();
  }, []);

  return null; // No need to render anything here
};

export default RetrieveUser;
