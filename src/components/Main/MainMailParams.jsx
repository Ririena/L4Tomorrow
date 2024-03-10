import { supabase } from "../../utils/supabase.js";
import { useState, useEffect } from "react";
import { getUserByEmail, getUserFromTable } from "../../libs/UserLibs";
import { useParams } from "react-router-dom";

export default function MainMailParams() {
  const [userData, setUserData] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [mailData, setMailData] = useState(null);

  const { mailId } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const user = await getUserByEmail();
        setUserEmail(user?.email);

        const userDataFromTable = await getUserFromTable(user?.email);
        setUserData(userDataFromTable);
      } catch (error) {
        console.error(error.message);
      }
    }

    getData();
  }, []);

  useEffect(() => {
    async function fetchMailData() {
      try {
        const { data, error } = await supabase
          .from("message")
          .select("*")
          .eq("id", mailId)
          .eq("ReceiverMaillerURL", userData?.id)
          .single(); // Mengambil satu baris data

        if (error) {
          throw error;
        }

        setMailData(data);
      } catch (error) {
        console.error("Error fetching mail data:", error.message);
      }
    }

    if (mailId && userData) {
      fetchMailData();
    }
  }, [mailId, userData]);

  if (!userEmail) {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl">Privasi Orang Bang</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <main>
        <section>
          <div>
            <h2>Mail Data</h2>
            {mailData && (
              <div>
                <p>Title: {mailData?.title}</p>
                <p>Message: {mailData?.message}</p>
                {/* Add other properties here */}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
