import { supabase } from "../utils/supabase";

// Ambil Data User Berdasarkan Email
export const getUserByEmail = async (email) => {
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

   

    return user;
  } catch (error) {
    console.error("Error fetching user:", error.message);
    throw error;
  }
};

// Ambil Data User Berdasarkan Table Yakni Email Juga
export const getUserFromTable = async (email) => {
  try {
    const { data, error } = await supabase
      .from("user")
      .select("*")
      .eq("email", email)
      .single();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching user from table:", error.message);
    throw error;
  }
};
