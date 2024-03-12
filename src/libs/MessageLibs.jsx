import { supabase } from "../utils/supabase";

export async function getMessageCountsByReceiver() {
  try {
    const { data, error } = await supabase.from("message").select("*");

    if (error) {
      throw error;
    }

    const messageCounts = {};
    data.forEach((message) => {
      const receiverId = message.ReceiverMaillerURL;
      messageCounts[receiverId] = messageCounts[receiverId] ? messageCounts[receiverId] + 1 : 1;
    });

    return messageCounts;
  } catch (error) {
    throw new Error("Error fetching message counts: " + error.message);
  }
}
