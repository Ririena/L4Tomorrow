import React, { useState, useEffect } from "react";
import { supabase } from "../../utils/supabase.js";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Input,
} from "@nextui-org/react";

export default function RetrieveUserFirst() {
  const [userEmail, setUserEmail] = useState(null);
  const [newUserName, setNewUserName] = useState("");
  const [existingUserName, setExistingUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [verify, setVerify] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();
        if (error) {
          console.error(error.message);
        } else {
          setUserEmail(user.email);

          const { data, error } = await supabase
            .from("user")
            .select("nama_user")
            .eq("email", user.email)
            .single();

          if (error) {
            console.error(error.message);
          } else {
            if (data) {
              setExistingUserName(data.nama_user);
            }
          }
        }
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const handleAddData = async () => {
    try {
      if (existingUserName) {
        console.log("Nama sudah ada:", existingUserName);
        return;
      }
  
      const { data, error } = await supabase
        .from("user")
        .insert([{ email: userEmail, nama_user: newUserName, Verified: true }]);
      if (error) {
        console.error(error.message);
      } else {
        console.log("Data added successfully:", data);
        setNewUserName("");
        setVerify(true);
        navigate("/");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  if (isLoading) {
    return null;
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
