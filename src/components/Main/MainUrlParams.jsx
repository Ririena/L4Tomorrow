import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../utils/supabase";
import {useToast} from "@chakra-ui/react"
import {ToastContainer, toast as notif} from "react-toastify"
import {
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
import { v4 as uuidv4 } from "uuid";
import { AiOutlinePicture } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
export default function MainUserParams() {
  const [gambar, setGambar] = useState(null);
  const [url, setUrl] = useState(null);
  const [titleDynamic, setTitleDynamic] = useState(null);
  const [namaUser, setNamaUser] = useState(null)
  const toasti = useToast()
  let { urlId } = useParams();

  useEffect(() => {
    async function getUrl() {
      try {
        const { data, error } = await supabase
          .from("user")
          .select("nama_user, id, title, nama_user")
          .eq("nama_user", urlId);

        if (error) {
          throw error;
        }

        
        if (data && data.length > 0) {
          setUrl(data[0].nama_user);
          setTitleDynamic(data[0].title);

          setUserId(data[0].id);
          setNamaUser(data[0].nama_user)
        } else {
          console.log("URL tidak ditemukan");
        }
      } catch (error) {
        console.error(error.message);
      }
    }
    getUrl();
  }, [urlId]);

  const [userId, setUserId] = useState(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [picture, setPicutre] = useState(null);

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

    if (userId == urlId) {
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
      ReceiverMaillerURL: userId,
    };
    
    const { data, error } = await supabase.from("message").insert([newMessage]);
    if (error) {
      console.error(error.message);
    } else {
      console.log("Data Berhasil Dikirim", data);
    }
  };
  const [isOpened, setIsOpened]= useState(false);
  const handleKirim = ()=> {
    setIsOpened(!isOpened);
  }
  const eventFoto = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setPicutre(selectedFile);
    } else {
      console.log("Tidak Ada File Yang Dipilih");
    }
  };

  return (
    <>
      <main>
        <div className="mt-4">
          <section className="flex justify-center items-center mb-96">
            <div className="max-w-md w-full">
              <Card className="rounded-xl overflow-hidden">
                <CardHeader className="flex items-center justify-center">
                  <Avatar src="/PFP.jpg" />
                  <div className="mx-4 mb-2 flex-1">
                    <h1 className="text-md font-sans">@{url}</h1>
                    <h1 className="text-md font-sans">{titleDynamic}</h1>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <div className="">
                    <Input
                    label="Title"
                    isRequired
                      type="text"
                      color="secondary"
                      className="bg-violet500"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter Your Title Violet"
                    />
                   
                    {isOpened ?(<Input type="file" accept="image/*" onChange={eventFoto} color="secondary" /> 
                   ):(<Textarea
                      label="message"
                      color="secondary"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Enter Your Letter Violet✉️"
                      className="w-full" />)}
                 
                  
                      className="w-full mt-2"
                    />
                  </div>
                </CardBody>
                <Divider />
                <CardFooter>
                  <div className="flex gap-4 mx-auto">

                  <Button color="secondary" onClick={handleSave} >
                    Kirim
                  </Button>
                <Button color="secondary" variant="bordered" onClick={handleKirim}>
           
           {isOpened?   <MdOutlineMessage size="1.5rem"/>:<AiOutlinePicture  size="1.5rem"/> }
         </Button>
                  <div className="mx-auto">
                    <Button
                      color="secondary"
                      variant="solid"
                      onClick={handleSave}
                    >
                      Send Mail
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </section>
        </div>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      </main>
    </>
  );
}
