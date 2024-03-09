import { supabase } from  "../../utils/supabase.js"
import { useState, useEffect } from "react";

export default function Mail() {
  const [userId, setUserId] = useState(null);
  const [receiverData, setReceiverData] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();

        if (error) {
          throw error;
        }

        
        const { data: userData, error: userError } = await supabase
          .from("user")
          .select("id")
          .eq("email", user.email)
          .single()
        

        if (userError) {
          throw userError;
        }

        setUserId(userData.id); 

        
        const { data: receiver, error: receiverError } = await supabase
          .from("message")
          .select("*")
          .eq("ReceiverMaillerURL", userData.id) 

        if (receiverError) {
          throw receiverError;
        }

        setReceiverData(receiver); 
      } catch (error) {
        console.error("Error fetching user or messages:", error.message);
      }
    }

    fetchUser();
  }, []);

  return (
    <>
      <main>
        <section>
          <div>
            <h2>Receiver Data:</h2>
            {receiverData && (
              <ul>
                {Object.entries(receiverData).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {JSON.stringify(value)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
