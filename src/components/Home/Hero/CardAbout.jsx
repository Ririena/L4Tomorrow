import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Input,
  Divider,
  Spacer,
  Image,
  Link,
} from "@nextui-org/react";
import { motion } from "framer-motion";
export default function CardAbout(props) {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          shadow="md"
          className="border-none  max-w-sm md:max-w-md lg:xl:max-w-lg"
        >
          <CardHeader>
            <Image src={props.image} width={350} className="object-cover " />
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="max-w-[350px] w-full">
              <h1 className="font-montserrat">{props.content}</h1>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </>
  );
}
