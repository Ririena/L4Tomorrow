import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion"; // Import useViewportScroll dan useTransform

const ParallaxImages = () => {
  const { scrollYProgress } = useViewportScroll(); // Dapatkan nilai kemajuan gulir
  
  // Gunakan useTransform untuk mengontrol posisi gambar berdasarkan scroll
  const y1 = useTransform(scrollYProgress, [0, 0.5], [0, -500]);
  const y2 = useTransform(scrollYProgress, [0, 0.5], [0, -300]);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <motion.img
        src="/Mails.gif"
        alt="Landscape"
        style={{ position: "absolute", top: 0, left: 0, right: 0, y: y1 }}
      />
      <motion.img
        src="/violet.jpg"
        alt="Portrait"
        style={{ position: "absolute", top: 0, left: 0, right: 0, y: y2 }}
      />
    </div>
  );
};

export default ParallaxImages;
