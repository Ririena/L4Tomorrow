import React, { useEffect } from "react";
import { Card,CardBody, CardHeader, CardFooter, Button, Image, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import RetrieveUserFirst from "../Main/RetrieveUserFirst";
import { supabase } from "../../utils/supabase";
import Product from "./Hero/Product";

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main>
      <div className="bg-gradient-to-r from-violet-800 to-indigo-900 py-20">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            className="max-w-lg mx-4 text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="xs:text-2xl text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Letter4Tomorrow
            </h1>
            <p className="text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">
              Experience the joy of sending heartfelt letters to your loved ones
              through Letter4Tomorrow, inspired by Violet Evergarden.
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

          <div className="flex justify-end xs:gap-0 sm:gap-0 gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto md:ml-auto xs:mx-0 sm:mx-0 xs:hidden sm:hidden xl:block lg:block md:hidden"
            >
                <Card
                  className="shadow-lg max-w-md"
                  variants={cardVariants}
                  whileTap={{ scale: 0.95 }}
                  initial="hidden"
                  animate="visible"
                >
                  <Image
                    src="/Mails.gif"
                    alt="Landscape"
                    className="w-full h-96 object-cover rounded-t-lg"
                  />

                  <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-violet-100/50 z-10 justify-between">
                  <div>
                    <p className="text-black text-tiny">Available soon.</p>
                    <p className="text-black text-tiny">Get notified.</p>
                  </div>
                  <Button className="text-tiny" color="primary" radius="full" size="sm">
                    Notify Me
                  </Button>
                </CardFooter>
                </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=""
            >
              <Card
                className="overflow-hidden shadow-lg mr-5"
                style={{ width: "max-content" }}
                variants={cardVariants}
                whileTap={{ scale: 0.95 }}
                initial="hidden"
                animate="visible"
              >
                <Image
                  src="/violet.jpg"
                  alt="Portrait"
                  className="w-full h-96 object-cover rounded-t-lg bg-gradient-to-r from-violet-500 to-white"
                />
              </Card>
            </motion.div>
          </div>
        </div>
        <div className="mt-16">
          <RetrieveUserFirst />
        </div>
      </div>

      <Product />
      <div className="mb-32"></div>
    </main>
  );
};

export default HeroSection;
