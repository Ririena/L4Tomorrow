import { supabase } from "../../utils/supabase";
import { useState, useEffect } from "react";
import {
  Button,
  Input,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Snippet,
  Divider,
  Link,
  Spacer,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import { WhatsappShareButton } from "react-share";

export default function RetrieveUser() {
  const [userEmail, setUserEmail] = useState(null);
  const [newUserName, setNewUserName] = useState(""); // Tambahkan state untuk menyimpan nama user baru
  const [existingUserName, setExistingUserName] = useState(""); // Tambahkan state untuk menyimpan nama user yang sudah ada
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();
        if (error) {
          console.error(error.message);
        } else {
          setUserEmail(user.email);

          // Ambil data user dengan email yang sama dari database
          const { data, error } = await supabase
            .from("user")
            .select("nama_user")
            .eq("email", user.email)
            .single();

          if (error) {
            console.error(error.message);
          } else {
            if (data) {
              // Jika data ditemukan, simpan nama user yang sudah ada
              setExistingUserName(data.nama_user);
            }
          }
        }
      } catch (error) {
        console.error(error.message);
      } finally {
        // Set isLoading menjadi false setelah selesai mengambil data
        setIsLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const handleAddData = async () => {
    try {
      // Cek apakah pengguna sudah memiliki nama di database
      if (existingUserName) {
        console.log("Nama sudah ada:", existingUserName);
        return;
      }

      // Jika pengguna belum memiliki nama, tambahkan data baru ke database
      const { data, error } = await supabase
        .from("user")
        .insert([{ email: userEmail, nama_user: newUserName }]);
      if (error) {
        console.error(error.message);
      } else {
        console.log("Data added successfully:", data);
        // Set newUserName kembali ke string kosong setelah berhasil menambahkan data
        setNewUserName("");
        navigate("/");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // Menampilkan loader jika data sedang diambil
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // Kondisi untuk menampilkan inputan dan tombol "Tambah Data" jika nama belum ada

  // Kondisi jika nama sudah ada, tampilkan pesan bahwa nama sudah ada
  return (
    <main className="pb-28">
      <section>
        <div className="mt-4">
          <section className="flex justify-center items-center">
            <div className="max-w-md lg:max-w-lg xl:max-w-lg w-full">
              <Card className="rounded-lg overflow-hidden">
                <CardHeader>
                  <section className="mx-auto font-semibold">
                    <h1 className="text-xl">Step 1: Copy Your Link</h1>
                  </section>
                </CardHeader>
                <CardBody>
                  <div className="mx-auto text-md">
                    <section>https://l4tomo.vercel.app</section>
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="mx-auto">
                    <Snippet>{`https://l4tomo.vercel.app/message/${existingUserName}`}</Snippet>
                  </div>
                </CardFooter>
              </Card>

              <Spacer y={4} />

              <Card className="rounded-lg overflow-hidden">
                <CardHeader>
                  <div className="mx-auto">
                    <h1 className="text-xl">
                      Step 2: Share Link On Your Story
                    </h1>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="mx-auto">
               
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(
                          `https://l4tomo.vercel.app/message/${existingUserName}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button color="secondary" variant="flat" className="bg-violet-400 text-white">
                          Share on WhatsApp
                        </Button>
                      </a>
                  </div>
                </CardBody>
              </Card>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
