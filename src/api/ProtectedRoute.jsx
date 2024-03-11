import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabase.js";

// Buat komponen untuk memeriksa apakah pengguna memiliki nama_user dan verify
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { user, error } = await supabase.auth.getUser();
      if (error) {
        console.error(error.message);
      } else if (!user) {
        navigate("/login");
      } else {
        setUser(user);
        setIsLoading(false);
      }
    };
    checkUser();
  }, [navigate]);

  if (isLoading) {
    return null; // Tampilkan loading spinner jika data pengguna sedang dimuat
  }

  // Jika user sudah login dan memiliki nama_user, izinkan akses ke komponen yang ditentukan
  return (
    <Route
      {...rest}
      render={(props) =>
        user && user.nama_user ? <Component {...props} /> : <Redirect to="/getData" />
      }
    />
  );
};

export default ProtectedRoute;
