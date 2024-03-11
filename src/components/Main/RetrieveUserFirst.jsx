import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabase.js";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Input,
} from "@nextui-org/react";
export default function RetrieveUserFirst() {
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

  if (isLoading) {
    return;
  }
  if (!existingUserName) {
    return (
      <main>
        <section>
          <div className="max-w-[300px] mx-auto">
            <Card shadow color="secondary">
              <CardBody>
                <Input
                  type="text"
                  placeholder="Nama User"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                  className="mb-4"
                  color="secondary" 
                />
                <Button
                  onClick={handleAddData}
                  color="secondary"
                  variant="shadow"
                >
                  Tambah Data
                </Button>
              </CardBody>
            </Card>
          </div>
        </section>
      </main>
    );
  }
}
