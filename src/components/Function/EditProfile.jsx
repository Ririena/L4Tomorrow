import { supabase } from "../../utils/supabase.js";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; 
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Button,
  Input,
  Image,
  Avatar,
  Spacer,
} from "@nextui-org/react";
export default function EditProfile() {
  const [userEmail, setUserEmail] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [userData, setUserData] = useState({
    profile: "",
  });

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

          const { data, error } = await supabase
            .from("user")
            .select("*")
            .eq("email", user.email)
            .single();
          if (error) {
            console.error(error.message);
          } else {
            setUserData(data || {});
            console.log(data);

            const res = await supabase.storage
              .from("avatar")
              .getPublicUrl(data.avatar);
            if (res.error) {
              console.error(error.message);
            } else {
              setAvatarUrl(res.data.publicUrl);
              console.log(data);
            }
          }
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchUserData();
  }, []);

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const avatarFileName = uuidv4(); 
        const { data, error } = await supabase.storage
          .from("avatar")
          .upload(avatarFileName, file, { cacheControl: "3600" });
        if (error) {
          throw error;
        }
        const avatarUrl = data.publicURL;
        setAvatarUrl(avatarUrl);

        
        await supabase
          .from("user")
          .update({ avatar: avatarFileName })
          .eq("email", userEmail);
      } catch (error) {
        console.error("Error updating avatar:", error.message);
      }
    }
  };

  const handleSubmit = async () => {
    
    console.log("Changes saved!");
  };

  return (
    <>
      <div className="flex justify-center items-center mt-12">
        <Card className="max-w-md w-full p-6">
          <div className="bg-violet-500 w-full h-44 flex justify-center items-center">
            <div className="flex items-center">
              <Avatar
                isBordered
                color="secondary"
                className="w-20 h-20 mr-4"
                src={avatarUrl}
              />
              <h1 className="capitalize text-lg text-white">{userData.nama_user}</h1>
            </div>
          </div>
          <Spacer y={1} />
          <div className="flex justify-center">
            <input
              type="file"
              onChange={handleAvatarChange}
              className="hidden"
              id="avatar"
            />
            <Button color="secondary" variant="ghost">
              <label
                htmlFor="avatar"
                className="cursor-pointer  px-4 py-2 rounded-md text-sm"
              >
                Upload Avatar
              </label>
            </Button>
          </div>
          <Spacer y={1} />
          <Button onClick={handleSubmit} color="primary" className="w-full">
            Save
          </Button>
        </Card>
      </div>
    </>
  );
}
