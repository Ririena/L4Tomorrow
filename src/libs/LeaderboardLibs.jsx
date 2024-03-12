

import { supabase } from "../utils/supabase";

export async function getLeaderboardData() {
  try {
    const { data: users, error: userError } = await supabase.from("user").select("*");
    const { data: messages, error: messageError } = await supabase.from("message").select("*");

    if (userError || messageError) {
      throw userError || messageError;
    }

    const userPoints = {};
    messages.forEach((message) => {
      const receiverId = message.ReceiverMaillerURL;
      userPoints[receiverId] = userPoints[receiverId] ? userPoints[receiverId] + 1 : 1;
    });

    const leaderboardData = users.map((user) => ({
      id: user.id,
      nama_user: user.nama_user,
      total_surat: userPoints[user.id] || 0, 
    }));

    leaderboardData.sort((a, b) => b.total_surat - a.total_surat);

    return leaderboardData;
  } catch (error) {
    throw new Error("Error fetching leaderboard data: " + error.message);
  }
}
