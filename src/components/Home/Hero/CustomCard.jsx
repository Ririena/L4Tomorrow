import React from "react";
import { Card, Image } from "@nextui-org/react";
import { motion } from "framer-motion";

const CustomCard = ({ imageSrc, altText }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden shadow-lg" style={{ width: "max-content" }}>
        <Image
          isBlurred={true}
          src={imageSrc}
          alt={altText}
          className="w-full h-96 object-cover rounded-t-lg bg-gradient-to-r bg-transparent"
        />
      </Card>
    </motion.div>
  );
};

export default CustomCard;
