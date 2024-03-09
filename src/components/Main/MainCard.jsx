import { Card, CardBody, CardHeader, CardFooter, Avatar, Button, Input } from "@nextui-org/react";
import { supabase } from "../../utils/supabase";
import { useState } from "react";

export default function MainCard() {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAddData = async () => {
    try {
      // Lakukan operasi penyimpanan data ke backend di sini
    } catch (error) {
      console.error(error.message);
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
