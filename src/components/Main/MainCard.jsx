import {
  Card,
  CardBody,
  CardHeader,
  Avatar,
  Button,
  Input,
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
      <section>
        <div className="flex justify-center items-center">
          <Card className="max-w-[400px]">
            <CardHeader>
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                alt="Profile Picture"
                size="lg"
                bordered
              />
            </CardHeader>
            <CardBody>
              <Input
                type="text"
                placeholder="Title"
                value={title}
                onChange={handleTitleChange}
                className="mb-4"
              />
              <Button
                onClick={handleAddData}
                color="success"
                variant="contained"
              >
                Add Data
              </Button>
            </CardBody>
          </Card>
        </div>
      </section>
    </main>
  );
}
