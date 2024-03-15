import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Divider,
} from "@nextui-org/react";

import { motion } from "framer-motion";
export default function CardProduct(props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[392px] w-[500px] font-montserrat"
      >
        <Card className="">
          <CardHeader className="flex justify-center items-center">
            <div className="w-full">
              <Image
                src={props.image}
                alt={props.alts}
                className="size-96"
              />
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="w-full flex-1">
            <div className="m-3">
              <h1 className="font-montserrat text-2xl">{props.title}</h1>
              <p>{props.description}</p>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </>
  );
}
