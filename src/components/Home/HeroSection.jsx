import React, { useEffect } from "react";
import { Card, Button, Image, Link, CardFooter } from "@nextui-org/react";
import { motion } from "framer-motion";
import RetrieveUserFirst from "../Main/RetrieveUserFirst";
import { supabase } from "../../utils/supabase";

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
        <div className="bg-gradient-to-r from-violet-800 to-indigo-900 py-20">
          <div className="flex flex-col md:flex-row justify-between items-center mx-auto">
            <div className="max-w-lg mx-4 text-white text-center md:text-left mb-8 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Letter4Tomorrow
                </h1>
                <p className="text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">
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
                      src="/Mails.gif"
                      alt="Mailler"
                      className="min-w-0 xs:w-[300px] sm:w-[600px] md:w-[340px] h-96 object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-32"></div>
      </main>
    </>
  );
};

export default HeroSection;
