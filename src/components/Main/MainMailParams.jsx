import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../utils/supabase.js";
import { getUserByEmail, getUserFromTable } from "../../libs/UserLibs";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Divider,
  Image,
  Button,
} from "@nextui-org/react";
import MainMailNotif from "../../components/Main/MainMailNotif";
import { Spinner } from "@nextui-org/react";
import ReactPlayer from "react-player";
import {format} from "date-fns"
export default function MainMailParams() {
  const [userData, setUserData] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [mailData, setMailData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [videoUrl, setVideoUrl] = useState(false);
  const [isWaxLoaded, setIsWaxLoaded] = useState(false);

  const { mailId } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const user = await getUserByEmail();
        setUserEmail(user?.email);

        const userDataFromTable = await getUserFromTable(user?.email);
        setUserData(userDataFromTable);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  useEffect(() => {
    async function fetchMailData() {
      try {
        const { data, error } = await supabase
          .from("message")
          .select("*")
          .eq("id", mailId)
          .eq("ReceiverMaillerURL", userData?.id)
          .single();

        if (error) {
          throw error;
        }

        setMailData(data);
        if (data?.video) {
          setVideoUrl(data.video);
        }
      } catch (error) {
        console.error("Error fetching mail data:", error.message);
      } finally {
        setLoading(false);
      }
    }

    if (mailId && userData) {
      fetchMailData();
    }
  }, [mailId, userData]);

  const handleShowDetail = () => {
    setShowDetail(!showDetail);
  };


  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return format(date, 'MMMM dd, yyyy')
  }
  return (
    <>
      <div></div>
      {loading && (
        <div className="flex justify-center items-center h-screen bg-white bg-opacity-30 ">
          <Spinner
            label="Loading..."
            color="secondary"
            size="lg"
            labelColor="secondary"
          />
        </div>
      )}
      {!loading && !userEmail && (
        <div className="flex justify-center items-center h-screen bg-white bg-opacity-30">
          <h1 className="text-2xl">Privasi Orang Bang</h1>
        </div>
      )}
      {!loading && userEmail && mailData && (
        <main className="bg-white mt-8 relative pb-[400px]">
          <div className="flex justify-center items-center">
            <MainMailNotif />
            <AnimatePresence>
              {!showDetail ? (
                <motion.div
                  key="mailPreview"
                  className="mt-16 shadow-xl max-w-md lg:max-w-[600px] xl:max-w-[600px] w-full mx-auto relative overflow-visible "
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className={`absolute top-0 left-[202px] lg:left-[271px] xl:left-[280px] ${
                      isWaxLoaded ? "block z-10" : "hidden"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleShowDetail}
                  >
                    <Image
                      onLoad={() => setIsWaxLoaded(true)}
                      src="/WAX.png"
                      height={45}
                      width={45}
                      alt="WAX"
                    />
                  </motion.div>
                  <motion.div
                    className="rounded-lg shadow-md overflow-hidden relative"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Card shadow="lg" className=" pb-96">
                      <CardHeader></CardHeader>
                      <Divider />
                      <CardBody>
                        <div className="text-center mb-4">
                          <p className="text-lg font-semibold capitalize">
                            Dear Major ({userData.nama_user})
                          </p>
                        </div>
                      </CardBody>
                      <Divider />
                    </Card>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="mailDetail"
                  className="mt-4 max-w-md lg:max-w-[600px] xl:max-w-[600px] w-full mx-auto relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className={`absolute top-0 left-[202px] ${
                      isWaxLoaded ? "block z-10" : "hidden"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleShowDetail}
                  ></motion.div>
                  <motion.div
                    className="shadow-md overflow-hidden relative"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card
                      bordered
                      shadow
                      className="max-w-2xl mx-auto p-8 rounded-lg bg-opacity-75"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h1 className="text-3xl font-bold font-serif text-violet-900">
                          {mailData.title}
                        </h1>
                        <p className="text-sm text-gray-500">
                          From: Violet Evergarden
                        </p>
                      </div>
                      <Divider className="border-violet-400 mb-4" />
                      <div className="py-4">
                        <p className="text-lg leading-relaxed text-gray-800">
                          {mailData.message}
                        </p>
                      </div>
                      <Divider className="border-violet-400 mt-4" />
                      <div className="flex justify-between items-center mt-4">
                        <div>
                          <p className="text-sm text-gray-600">
                            Violet Evergarden
                          </p>
                          <p className="text-xs text-gray-400 ">
                          {formatDate(mailData.send_at)}
                          </p>
                        </div>
                        <Image
                          src="/violetP.jpg"
                          alt="Stamp"
                          className="size-12"
                        />
                      </div>
                    </Card>
                  </motion.div>
                  <div className="mt-4">
                
                    {!loading && userEmail && mailData && showDetail && (
                      <>
                        <Card bordered shadow>
                          <div className="mx-auto">
                            <Image
                              src="/violetP.jpg"
                              alt="Sample Image"
                              className="rounded-md size-96 object-contain"
                            />
                          </div>
                          <CardBody>
                            <Divider />
                            <h3 className="text-lg font-semibold">
                              Violet Pict
                            </h3>
                            <p>{mailData.message}</p>
                          </CardBody>
                        </Card>

                        <div className="mt-4">
                          <Card>
                            <ReactPlayer
                              url={videoUrl}
                              controls={true}
                              className=""
                            />
                          </Card>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      )}
    </>
  );
}
