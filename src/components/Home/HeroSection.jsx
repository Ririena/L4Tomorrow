import React, { useEffect } from "react";
import {
  Card,
  Button,
  Image,
  Link,
  CardFooter,
  Divider,
  CardBody,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import RetrieveUserFirst from "../Main/RetrieveUserFirst";
import { supabase } from "../../utils/supabase";
import CardAbout from "./Hero/CardAbout";
import CardWorks from "./Hero/CardWorks"
import { TypeAnimation } from "react-type-animation";
const HeroSection = () => {
  useEffect(() => {
    async function retrieveUser() {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (error) {
          throw error;
        }

        console.log("Data Pengguna:", user);
        console.log(user.user_metadata);
      } catch (error) {
        console.error("Error:", error.message);
      }
    }

    retrieveUser();
  }, []);

  return (
    <>
      <main>
        <div className="shadow-xl bg-gradient-to-r from-violet-800 to-indigo-900 py-20 ">
          <div className="flex flex-col md:flex-row justify-between items-center mx-auto">
            <div className="max-w-lg mx-4 text-white text-center md:text-left mb-8 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h1 className="xs:text-2xl text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Letter4Tomorrow
                </h1>
                <p className="text-gray-300 xs:text-md text-lg md:text-xl lg:text-2xl mb-8">
                  Experience the joy of sending heartfelt letters to your loved
                  ones through Letter4Tomorrow, inspired by Violet Evergarden.
                </p>
                <Button
                  color=""
                  variant="bordered"
                  radius="xl"
                  as={Link}
                  href="/me"
                  size="lg"
                  className="text-white"
                >
                  Get Started!!
                </Button>
              </motion.div>
            </div>

            <div className="flex justify-end gap-3">
              <div
                className="  overflow-hidden   max-w-sm md:max-w-full w-full"
                whileTap={{ scale: 0.95 }}
                initial="hidden"
                animate="visible"
              >
                <div className="xs:hidden sm:hidden md:hidden lg:block xl:block">
                  <div className="flex gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Card>
                        <Image
                          src="/Mails.gif"
                          alt="Mailler"
                          className="size-[384px] object-cover min-w-0"
                        />
                      </Card>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Card>
                        <Image
                          src="/violet.jpg"
                          alt="Portrait"
                          className="min-w-0 w-full h-96 object-cover rounded-t-lg bg-gradient-to-r from-violet-500 to-white"
                        />
                      </Card>
                    </motion.div>
                  </div>
                </div>
                <div className="block lg:hidden xl:hidden">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src="/violetP.jpg"
                      alt="Mailler"
                      className="min-w-0 xs:w-[280px] sm:w-[600px] md:w-[340px] h-96 object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Divider className="" />

        <div className="flex justify-center items-center mt-12">
          <h1 className="font-bold font-montserrat text-4xl">What's In L4T?</h1>
        </div>
        <div className="text-center mt-2">
          <h1 className="font-normal text-slate-600 font-montserrat text-2xl">
            Everything You Need To Know About Letter For Tomorrow.
          </h1>
        </div>

        <div className="flex justify-center items-center mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-20">
            <CardAbout
              image="/cards/card.png"
              content="Strengthen your relationships by sending heartfelt messages."
            />
            <CardAbout
              image="/cards/card2.jpg"
              content="Share your thoughts and emotions with beautifully crafted letters."
            />
            <CardAbout
              image="/cards/card3.jpg"
              content="Create lasting memories through the art of letter writing"
            />
          </div>
        </div>
        <div className="mb-32"></div>
        <div className="bg-violet-400">
          <section className="flex flex-col md:flex-row justify-between items-center mx-auto">
            <div className="max-w-[900px]">
              <div className="mx-[148px] my-[100px] ">
                <h1 className="font-montserrat text-md md:text-lg lg:xl:text-2xl font-medium">
                  <TypeAnimation
                    sequence={[
                      "Orang Yang Mencintaimu adalah orang yang selalu Mengawasimu",
                      5000,
                      "Orang",
                      1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </h1>

                <h2 className="text-lg mt-4 font-montserrat font-semibold">
                  Violet Evergarden
                </h2>
              </div>
            </div>
            <div className="flex justify-end">
              <Card className="mr-[120px]">
                <div>
                  <Image
                    src="/violetP.jpg"
                    className="xs:sm:block hidden object-cover "
                    width={500}
                  />
                </div>
              </Card>
            </div>
          </section>
        </div>

        <Divider className="" />
        <div className="mt-[90px] "></div>
        <h1 className="text-center text-3xl font-semibold  font-montserrat">
          How it Works
        </h1>
        <div className="flex justify-center items-center mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-20">
      <CardWorks/>
      <CardWorks/>
      <CardWorks/>
          </div>
        </div>
        <section className="flex justify-between">
          <div>
            <h1>Hello</h1>
          </div>
        </section>
      </main>
    </>
  );
};

export default HeroSection;
