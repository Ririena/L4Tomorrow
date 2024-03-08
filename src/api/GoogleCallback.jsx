// GoogleCallback.jsx

import { useEffect } from 'react';
import { supabase } from  '../utils/supabase'; // Impor Supabase Client
import { useLocation } from 'react-router-dom'; // Jika Anda menggunakan React Router

function GoogleCallback() {
  const location = useLocation();

  useEffect(() => {
    async function handleCallback() {
      try {
        // Parsing kode akses dari URL callback
        const searchParams = new URLSearchParams(location.search);
        const code = searchParams.get('code');

        // Mendapatkan data pengguna dari respons OAuth menggunakan kode akses
        const { user, error } = await supabase.auth.signIn({
          provider: 'google',
          code,
        });

        if (error || !user) {
          throw error || new Error('Failed to sign in with Google');
        }

        // Simpan data pengguna ke dalam tabel "user" di Supabase
        const userData = {
          email: user.email,
          nama_user: user.user_metadata?.full_name || user.user_metadata?.name || user.email || 'User',
        };

        const { data: insertedUserData, error: userError } = await supabase
          .from('user')
          .upsert([userData]);

        if (userError) {
          throw userError;
        }

        // Redirect atau tampilkan pesan sukses
        // Misalnya, Anda bisa menggunakan React Router untuk melakukan redirect
        // history.push('/home');
      } catch (error) {
        console.error('Callback error:', error.message);
        // Tampilkan pesan error atau lakukan pengalihan jika terjadi kesalahan
      }
    }

    handleCallback();
  }, [location.search]);

  return null; // Karena ini adalah halaman callback, Anda mungkin tidak perlu menampilkan apa pun di sini
}

export default GoogleCallback;
