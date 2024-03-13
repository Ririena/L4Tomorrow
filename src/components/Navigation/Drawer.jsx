import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlinePicture, AiOutlineYoutube } from "react-icons/ai";
import { Button, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { FiMenu } from "react-icons/fi";
import { GoX } from "react-icons/go";
import { useState, useEffect } from "react";
import {
  TiSocialInstagram,
  TiSocialYoutube,
  TiSocialFacebook,
} from "react-icons/ti";
import { TfiWorld } from "react-icons/tfi";
export default function Draw() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");
  return (
    <>
      {" "}
      <FiMenu
        size="2em"
        className="cursor-pointer sm:block md:block lg:hidden xl:hidden"
        onClick={onOpen}
      />
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent >
          <DrawerHeader
            borderBottom="1px "
            className="bg-gradient-to-r from-violet-600 via-violet-700 to-violet-800  "
          >
            <NavbarContent  justify="center">
              <NavbarBrand>
                <p
                  className="font-bold text-white cursor-pointer text-xl "
                  //   onClick={handleHom}
                >
                  Letter4T
                </p>
              </NavbarBrand>
              <DrawerCloseButton
                className="text-white cursor-pointer sm:block md:block lg:hidden xl:hidden"
                onClick={onClose}
              />
            </NavbarContent>
          </DrawerHeader>
          <DrawerBody className="bg-gradient-to-r from-violet-600 via-violet-700 to-violet-800  text-white ">
   

            <Button className="text-white font-montserrat  bg-violet-500  hover:bg-violet-900  w-full"  radius="small" color="secondary" variant="solid" >
              What's L4T?
            </Button>
            <Button className="text-white font-montserrat  bg-violet-500  hover:bg-violet-900  w-full mt-4"  radius="small" color="secondary" variant="solid" >
              Safety Center
           
            </Button>
            <Button  className="text-white font-montserrat  bg-violet-500  hover:bg-violet-900  w-full mt-4"  radius="small" color="secondary" variant="solid" >
              Faq
            </Button>
            <Button className="text-white font-montserrat  bg-violet-500  hover:bg-violet-900  w-full mt-4"  radius="small" color="secondary" variant="solid" ><a href="/login">Login</a>
              
            </Button>
          </DrawerBody>
         
        </DrawerContent>
      </Drawer>
    </>
  );
}
