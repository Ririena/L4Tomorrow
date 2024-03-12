import { useState, useEffect } from "react";
import { getUserByEmail, getUserFromTable } from "../libs/UserLibs";

export default function Test() {
  const [userData, setUserData] = useState(null);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Mendapatkan data pengguna dari autentikasi
        const user = await getUserByEmail();
        setUserEmail(user.email);

        // Mendapatkan data pengguna dari tabel user
        const userDataFromTable = await getUserFromTable(user.email);
        setUserData(userDataFromTable);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h2>User Email: {userEmail}</h2>
      {userData ? (
        <div>
        <img src={userData.avatar}/>
          <h2>User Data:</h2>
          <ul>
            <h1>{userData.nama_user}</h1>
            <h1>{userData.title}</h1>
          </ul>
        </div>
      ) : (
        <h1>Pencurry</h1>
      )}
    </div>
  );
}
