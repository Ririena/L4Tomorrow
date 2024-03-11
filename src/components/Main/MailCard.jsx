import { supabase } from "../../utils/supabase.js";
import { useState, useEffect } from "react";
import LayoutsUser from "../../components/Layout/LayoutsUser.jsx";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Input,
  Image,
  Link,
  Textarea,
} from "@nextui-org/react";
export default function Mail() {
  const [userId, setUserId] = useState(null);
  const [receiverData, setReceiverData] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (error) {
          throw error;
        }

        const { data: userData, error: userError } = await supabase
          .from("user")
          .select("id")
          .eq("email", user.email)
          .single();

        if (userError) {
          throw userError;
        }

        setUserId(userData.id);

        const { data: receiver, error: receiverError } = await supabase
          .from("message")
          .select("*")
          .eq("ReceiverMaillerURL", userData.id);

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

  const handleSelectMessagge = (message) => {
    setSelectedMessage(message);
  };

  return (
    <>
      <main>
        <section>
          {receiverData && (
            <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 m-4">
              {receiverData.map((message) => (
                <li key={message.id} className="flex justify-center">
                  <motion.section
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    animate={{
                      opacity: 1,
                    }}
                    className="max-w-[400px] w-full"
                  >
                    <Card>
                      <a href={`/me/mail/${message.id}`}>
                        <Image src="/Mail.png" />
                      </a>
                    </Card>
                  </motion.section>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </>
  );
}
