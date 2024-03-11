import { useState, useEffect } from "react";
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
} from "@nextui-org/react";
import MainMailNotif from "../../components/Main/MainMailNotif";
import { Spinner } from "@nextui-org/react";

export default function MainMailParams() {
  const [userData, setUserData] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [mailData, setMailData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
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

  return (
    <>
      <div></div>
      {loading && (
        <div className="flex justify-center items-center h-screen bg-white bg-opacity-30">
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
        <main className="bg-white mt-8">
          <div className="flex justify-center items-center">
            <MainMailNotif />
            <AnimatePresence>
              {!showDetail ? (
                <motion.div
                  key="mailPreview"
                  className="max-w-md lg:max-w-[600px] xl:max-w-[600px] w-full mx-auto relative overflow-visible"
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
                    <Card bordered shadow>
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
                    <Card bordered shadow>
                      <CardHeader>
                        <div className="mx-auto">
                          <h1 className="text-xl font-serif capitalize">
                            {mailData.title}
                          </h1>
                        </div>
                      </CardHeader>
                      <Divider />
                      <CardBody>
                        <div className="flex justify-center">
                          <h1>{mailData.message}</h1>
                        </div>
                      </CardBody>
                      <Divider />
                      <CardFooter style={{ justifyContent: "flex-end" }}>
                        <div className="flex justify-items-end">
                          <h1>Violet Evergarden</h1>
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                  <div className="mt-4">

                  
                    <Card>
                    
                    </Card>
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
