import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../utils/supabase";
import {
  Tab,
  Tabs,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Input,
  Divider,
  Spacer,
  Avatar,
  Textarea,
} from "@nextui-org/react";
import { Input as Inputc } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlinePicture, AiOutlineYoutube } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
export default function MainUserParams() {
  const [gambar, setGambar] = useState(null);
  const [url, setUrl] = useState(null);
  const [titleDynamic, setTitleDynamic] = useState(null);
  const { urlId } = useParams();
  const [userId, setUserId] = useState(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [picture, setPicture] = useState(null);
  const [youtubeUrl, setYoutubeUrl] = useState(""); // State untuk menyimpan URL video YouTube

  useEffect(() => {
    async function getUrl() {
      try {
        const { data, error } = await supabase
          .from("user")
          .select("nama_user, id, title")
          .eq("nama_user", urlId);

        if (error) {
          throw error;
        }

        if (data && data.length > 0) {
          setUrl(data[0].nama_user);
          setTitleDynamic(data[0].title);

          setUserId(data[0].id);
        } else {
          console.log("URL tidak ditemukan");
        }
      } catch (error) {
        console.error(error.message);
      }
    }
    getUrl();
  }, [urlId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await supabase.from("message").insert([
        {
          title,
          message,
          ReceiverMaillerURL: userId,
        },
      ]);

      setTitle("");
      setMessage("");
      console.log("Pesan terkirim!");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleSave = async () => {
    if (userId === urlId) {
      alert("Jangan Halu Sayangku");
    }
    let imageName = null;

    if (picture) {
      imageName = `${uuidv4()}.${picture.name.split(".").pop()}`;

      const { data: pictureData, error: pictureError } = await supabase.storage
        .from("gambar")
        .upload(`picture/${imageName}`, picture);

      if (pictureError) {
        console.error("Error Uploading", pictureError);
      }
    }

    const newMessage = {
      title: title,
      message: message,
      gambar: imageName,
      video: youtubeUrl, // Menyimpan URL video ke kolom video
      ReceiverMaillerURL: userId,
    };

    const { data, error } = await supabase.from("message").insert([newMessage]);
    if (error) {
      console.error(error.message);
    } else {
      console.log("Data Berhasil Dikirim", data);
    }
  };
  const [isOpened, setIsOpened] = useState(false);
  const handleKirim = () => {
    setIsOpened(!isOpened);
  };
  const eventFoto = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setPicture(selectedFile);
    }
  };
  let tabs = [
    {
      id: "photos",
      label: "Gambar",
      content: (
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setPicture(e.target.files[0])}
          color="secondary"
          endContent={<AiOutlinePicture size="2rem"/>}
        />
      ),
    },
    {
      id: "Text",
      label: "Text" ,
      content: (
        <Textarea
          label="message"
          color="secondary"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter Your Letter Violet✉️"
          className="w-full"a

        />
      ),
    },
    {
      id: "Video",
      label: "Video",
      content: (
        <>
          <Input
            type="text"
            color="secondary"
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
            placeholder="Enter YouTube URL"
          endContent={<AiOutlineYoutube size="2rem"/>}

          />
          {youtubeUrl && (
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${youtubeUrl.split("v=")[1]}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </>
      ),
    },
  ];
  return (
    <>
      <main>
        <div className="mt-4">
          <section className="flex justify-center items-center mb-96">
            <div className="max-w-md w-full">
    <div className="flex w-full flex-col mt-4 ">
      <Tabs aria-label="Dynamic tabs" items={tabs} className="mx-auto" color="secondary">
        {(item) => (
          <Tab key={item.id} title={item.label} >
                      <Card className="rounded-xl overflow-hidden bg-gradient-to-r from-violet-500 to-violet-700" >
                        <CardHeader className="flex items-center justify-center">
                          <Avatar src="/PFP.jpg" />
                          <div className="mx-4 mb-2 flex-1">
                            <h1 className="text-md font-sans text-white">{url}</h1>
                            <h1 className="text-md font-sans ">
                              {titleDynamic}
                            </h1>
                          </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                          <div>
                            <Input
                              type="text"
                              color="secondary"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              placeholder="Enter Your Title Violet"
                            />
                          </div>
                          <div className="mt-4">
                          {item.content}
                          </div>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                          <div className="flex gap-4 mx-auto">
                            <Button
                            className=""
                            
                              color="secondary"
                              variant="solid"
                              onClick={handleSave}
                            >
                              Send Mail
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                            </Tab>
                          )}
                        </Tabs>
                      </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
