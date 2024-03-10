"use client";
// Import the necessary modules from Chakra UI
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { supabase } from "../../utils/supabase.js";

const SignCard = () => {
  const toast = useToast();

  const [tambahUsers, setTambahUsers] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setTambahUsers({ ...tambahUsers, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    if (tambahUsers.password !== tambahUsers.password2) {
      toast({
        title: "Error",
        description: "Password/Email tidak sama",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: tambahUsers.email,
        password: tambahUsers.password,
      });

      if (error) {
        toast({
          title: "Error",
          description: "Gagal, " + error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Sukses",
          description: "Berhasil",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  

  return (
    <>
   
      <nav className="flex h-screen justify-center items-center ">
        <div className="shadow-lg">
          <div className="card w-96 bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="card-body p-6">
              <h2 className="card-title text-3xl font-bold mb-4 text-purple-800">
                Sign Up for an Account
              </h2>
              <hr className="mb-4 border-purple-400" />
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="text-lg font-medium text-purple-800"
                  >
                    Email:
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={tambahUsers.email}
                    onChange={handleChange}
                    placeholder="Arienesu@gmail.com"
                    className="input input-bordered w-full mt-1 text-purple-800"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="text-lg font-medium text-purple-800"
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={tambahUsers.password}
                    onChange={handleChange}
                    placeholder="ArienaKawaii"
                    className="input input-bordered w-full mt-1 text-purple-800"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password2"
                    className="text-lg font-medium text-purple-800"
                  >
                    Confirm Password:
                  </label>
                  <input
                    type="password"
                    id="password2"
                    name="password2"
                    value={tambahUsers.password2}
                    onChange={handleChange}
                    placeholder="ArienaKawaii"
                    className="input input-bordered w-full mt-1 text-purple-800"
                  />
                </div>
                <div className="text-center mt-8">
                  <button
                    type="submit"
                    className={`btn btn-primary w-full bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 text-white ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Signup"}
                  </button>
                </div>
              </form>
              <div className="mt-3 text-center">
                <button
                  className=" link font-medium text-indigo-600"
                >
                  Already Have An Account?..
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SignCard;