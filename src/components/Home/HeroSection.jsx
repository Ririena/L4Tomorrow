import React from "react";
import { Card, Button, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { supabase } from "../../utils/supabase";
async function retrieveUser() {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error) {
      throw error;
    }

    console.log("Data Pengguna:", user);
    console.log(user.user_metadata)

  } catch (error) {
    console.error("Error:", error.message);
  }
}

retrieveUser();

const HeroSection = () => {
  const words = [
    {
      text: "Auto",
      className: "text-md",
    },
    {
      text: "Memories",
      className: "text-md",
    },
    {
      text: "Started",
      className: "text-md",
    },
  ];

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          className="max-w-lg mx-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6">
            Letter For Tomorrow
          </h1>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl">
            it is a webapps whose concept is almost the same as NGL(NotGonnaLie
            Apps) but with additional features, where you represent as Violet
            Evergarden or a mailer which sends letters to people there, and
            that's why it is called Letter4Tomorrow
          </p>
          <Button color="primary" variant="flat" className="mt-4">
            Get Started
          </Button>
        </motion.div>

        <div className="flex justify-end gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card
              className="rounded-lg  shadow-lg sm:hidden md:hidden lg:block xl:block"
              whileTap={{ scale: 0.95 }} // Tambahkan efek saat kartu ditekan
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/violet-landscape.jpg"
                  alt="Landscape"
                  className="w-full h-96 object-cover rounded-t-lg"
                />
              </motion.div>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card
              className="rounded-lg overflow-hidden shadow-lg mr-5"
              style={{ width: "max-content" }}
              whileTap={{ scale: 0.95 }} // Tambahkan efek saat kartu ditekan
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/violet.jpg"
                  alt="Portrait"
                  className="w-full h-96 object-cover rounded-t-lg"
                />
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
