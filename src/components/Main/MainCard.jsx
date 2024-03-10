import {
  Card,
  CardBody,
  CardHeader,
  Avatar,
  Button,
  Input,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";
import { supabase } from "../../utils/supabase";
import { useState, useEffect } from "react";

export default function MainCard() {
  const [title, setTitle] = useState("");
  const [userData, setUserData] = useState(null);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    async function fetchUser() {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (error) {
          throw error;
        }

        setUserEmail(user.email);

        const { data, error: userError } = await supabase
          .from("user")
          .select("*")
          .eq("email", user.email)
          .single();

        if (userError) {
          throw userError;
        }

        setUserData(data);
      } catch (error) {
        console.error("Error fetching user:", error.message);
      }
    }

    fetchUser();
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAddData = async () => {
    try {
      if (!title) {
        console.error("Title is empty");
        return;
      }

      if (!userEmail) {
        console.error("User email is empty");
        return;
      }

      const { error: updateError } = await supabase
        .from("user")
        .update({ title: title })
        .eq("email", userEmail);

      if (updateError) {
        throw updateError;
      }

      console.log("Title updated successfully!");

      // Refresh userData from the server to reflect the changes
      const { data, error: fetchError } = await supabase
        .from("user")
        .select("*")
        .eq("email", userEmail)
        .single();

      if (fetchError) {
        throw fetchError;
      }

      // Update userData with the refreshed data
      setUserData(data);
    } catch (error) {
      console.error("Error updating title:", error.message);
    }
  };

  return (
    <main>
      <section className="flex justify-center mt-12 items-center bg-gray-100">
        <div className="max-w-md">
          <Card className="rounded-lg overflow-hidden">
            <CardHeader>
              <div className="mx-auto rounded-lg">
                <Image
                  src="/PFP.jpg"
                  alt="Profile Picture"
                  size="lg"
                />
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="p-6">
              <h1 className="text-2xl font-bold mb-4 mx-auto">
                {userData ? userData.title : ""}
              </h1>
              <Input
                type="text"
                placeholder="New Title"
                value={title}
                onChange={handleTitleChange}
                className="mb-4"
              />
              <Button
                className="text-white"
                onClick={handleAddData}
                color="success"
                variant="shadow"
              >
                Add New Title
              </Button>
            </CardBody>
          </Card>
        </div>
      </section>
    </main>
  );
}
