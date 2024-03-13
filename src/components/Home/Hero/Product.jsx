import { Card, CardBody, CardHeader, CardFooter, Image } from "@nextui-org/react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import CardProduct from "./CardProduct";
import {useState} from "react"
import { useInView } from "react-intersection-observer";
export default function Product(props) {

const [isCardVisible, setIsCardVisible] = useState(false)

  const itemVariants = {
    hidden: {opacity: 0, y: 0},
    visible: {opacity: 1, y: 50},
  }
  return (
    <>
    <main>
    <section>
      <div>
        <section>
          <div className="flex justify-center items-center mt-20">
            <h1 className="font-montserrat text-3xl bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              What's in Letter For Tomorrow
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="mt-4 text-xl font-montserrat ">
              Everything you need to Know About
              <div className="text-center font-montserrat font-semibold text-xl">
                <TypeAnimation
                  sequence={[
                    " Create Socialize",
                    3000,
                    " Expressing Emotion",
                    3000,
                    " Secure Communication",
                    3000,
                  ]}
                  repeat={Infinity}
                  wrapper="h1"
                />
              </div>
            </h1>
          </div>
          <section className="mt-12">
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <CardProduct
                    title="Letter"
                    alt="Mail"
                    description=" Share your thoughts and emotions with beautifully crafted letters."
                    image="/violetP.jpg"
                  />
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <CardProduct
                    title="Memories"
                    alt="Memories"
                    description="Create lasting memories through the art of letter writing"
                    image="/cards/card3.jpg"
                  />
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <CardProduct
                    title="Relation"
                    alt="Relation"
                    description="Strengthen your relationships by sending heartfelt messages."
                    image="/cards/card.png"
                  />
                </motion.div>
                
                {/* Add more CardProduct components here */}
              </div>
            </div>
          </section>
        </section>
      </div>
    </section>
  </main>
    </>
  );
}
