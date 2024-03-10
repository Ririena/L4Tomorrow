import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../utils/supabase";

export default function MainUserParams() {
  const [gambar, setGambar] = useState(null);
  const [url, setUrl] = useState(null);
  let { urlId } = useParams();

  useEffect(() => {
    async function getUrl() {
      try {
        const { data, error } = await supabase
          .from("user")
          .select("nama_user, id")
          .eq("nama_user", urlId);

        if (error) {
          throw error;
        }

        if (data && data.length > 0) {
          setUrl(data[0].nama_user);

          setUserId(data[0].id);
        } else {
          console.log("URL tidak ditemukan");
        }
      } catch (error) {
        console.error(error.message);
      }
    }
    getUrl();
  }, [urlId]);

  const [userId, setUserId] = useState(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await supabase.from("message").insert([
        {
          title,
          message,
          ReceiverMaillerURL: userId,
        },
      ]);

      setTitle("");
      setMessage("");
      console.log("Pesan terkirim!");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <main>
        <div>
          <h1>{url}</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Judul Pesan"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Isi Pesan"
              required
            ></textarea>
            <button type="submit">Kirim Pesan</button>
          </form>
        </div>
      </main>
    </>
  );
}
