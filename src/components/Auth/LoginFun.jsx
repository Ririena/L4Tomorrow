import React, { useState } from "react";
import { supabase } from "../../utils/supabase.js";
import { useToast } from "@chakra-ui/react";
import {useNavigate} from "react-router-dom"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Input,
  Divider,
  Image,
} from "@nextui-org/react";

export default function LoginFun() {
  const toast = useToast();
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null);

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
      const { data, error } = await supabase.auth.signInWithPassword({
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
        navigate("/me")
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
        provider: "google",
      });

      if (error || !user) {
        throw error || new Error("Failed to sign in with Google");
      }

      // Dapatkan data pengguna dari respons OAuth
      const userData = {
        email: user.raw_user_meta_data.email,
        nama_user:
          user.raw_user_meta_data.full_name ||
          user.raw_user_meta_data.name ||
          user.raw_user_meta_data.email,
      };

      // Pastikan nama pengguna tidak kosong
      if (!userData.nama_user) {
        throw new Error("Nama pengguna tidak valid");
      }

      // Simpan data pengguna ke dalam tabel "user" di Supabase
      // const { data: insertedUserData, error: userError } = await supabase
      //   .from("user")
      //   .insert([userData]);

      // if (userError) {
      //   throw userError;
      // }

      // // Tampilkan pesan sukses
      // toast({
      //   title: "Login Berhasil",
      //   description: `Selamat Datang Kembali, ${userData.email}`,
      //   status: "success",
      //   duration: 5000,
      //   isClosable: true,
      // });

      // console.log("User Data setelah login:", insertedUserData);
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
        <div className="h-screen flex items-center justify-center bg-blue-50">
          <Card
            shadow="xl"
            className="w-full md:max-w-[400px]"
            color="blue"
            border="none"
          >
            <CardHeader color="white" background="blue" className="">
              <section className="mx-auto">
                <h1 className=" text-black text-3xl font-semibold">Login</h1>
              </section>
            </CardHeader>
            <Divider />
            <CardBody>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                    color="secondary"
                    fullWidth
                    className="text-white border-none"
                  />
                </div>
                <div className="mb-4">
                  <Input
                    type="password"
                    color="secondary"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    required
                    fullWidth
                    className="text-white border-none "
                  />
                </div>
                <div className="mb-4">
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    color="secondary"
                    value={form.password2}
                    onChange={(e) =>
                      setForm({ ...form, password2: e.target.value })
                    }
                    required
                    fullWidth
                    className="text-white border-none"
                  />
                </div>
                <Button
                  type="submit"
                  color="secondary"
                  variant="shadow"
                  fullWidth
                  loading={isSubmit}
                  background="purple"
                  border="none"
                  mt="2"
                  className="bg-purple-500 hover:bg-purple-600 border-none"
                >
                  Submit
                </Button>
              </form>
            </CardBody>
            <Divider/>
            <CardFooter>
              <Button
                color=""
                variant="shadow"
                onClick={handleGoogleLogin}
                fullWidth
                border="2" // Menambahkan border dengan ketebalan 2 piksel
                className="bg-purple-50"
              >
               
                <span className="flex items-center">
                  <Image src="/google.png" width={30} />
                  Continue with Google
                </span>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}
