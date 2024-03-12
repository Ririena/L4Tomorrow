import { supabase } from "../utils/supabase";

export async function getUsers() {
  try {
    const users = await supabase.from("user").select("id, nama_user");
    return users;
  } catch (error) {
    throw new Error("Error fetching users: " + error.message);
  }
}
