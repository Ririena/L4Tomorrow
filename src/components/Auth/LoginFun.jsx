import React, { useState } from "react";
import { supabase } from "../../utils/supabase.js";
import { useToast } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";

export default function LoginFun() {
  const toast = useToast();
  const [userData, setUserData] = useState(null)

  const [form, setForm] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const [isSubmit, setIsSubmit] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (form.password !== form.password2) {
      toast({
        title: "Login Gagal",
        description: "Gagal, Password Tidak Sama",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setIsSubmit(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signIn({
        email: form.email,
        password: form.password,
      });

      if (error) {
        toast({
          title: "Login Gagal",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Login Berhasil",
          description: "Selamat Datang Kembali",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsSubmit(false);
    }
  }

  async function handleGoogleLogin() {
    try {
      const { user, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
    
      if (error || !user) {
        throw error || new Error('Failed to sign in with Google');
      }
    
      // Dapatkan data pengguna dari respons OAuth
      const userData = {
        email: user.raw_user_meta_data.email,
        nama_user: user.raw_user_meta_data.full_name || user.raw_user_meta_data.name || user.raw_user_meta_data.email
      };
  
      // Pastikan nama pengguna tidak kosong
      if (!userData.nama_user) {
        throw new Error('Nama pengguna tidak valid');
      }
    
      // Simpan data pengguna ke dalam tabel "user" di Supabase
      const { data: insertedUserData, error: userError } = await supabase
        .from("user")
        .insert([userData]);
    
      if (userError) {
        throw userError;
      }
    
      // Tampilkan pesan sukses
      toast({
        title: "Login Berhasil",
        description: `Selamat Datang Kembali, ${userData.email}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    
      console.log("User Data setelah login:", insertedUserData);
    } catch (error) {
      console.error("Google login error:", error.message);
      toast({
        title: "Login Gagal",
        description: "Gagal login dengan Google",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }
  
  
  

  
  
  return (
    <main>
      <section>
        <div className="h-screen flex items-center justify-center">
          <Card>
            <CardHeader>
              <h1>Login</h1>
            </CardHeader>
            <CardBody>
              <Button
                color="primary"
                variant="text"
                onClick={handleGoogleLogin}
              >
                Login with Google
              </Button>
            </CardBody>
            <CardFooter>
              {/* Tambahkan formulir login lainnya di sini */}
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}
