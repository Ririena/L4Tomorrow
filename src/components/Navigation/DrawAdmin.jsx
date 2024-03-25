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
import { Button, NavbarBrand, NavbarContent, Avatar } from "@nextui-org/react";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";
import { RiAdminFill } from "react-icons/ri";
import { SiBloglovin } from "react-icons/si";
import { MdEventSeat, MdMarkAsUnread } from "react-icons/md";
import { FaRegPlusSquare } from "react-icons/fa";
export default function DrawAdmin() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");
  return (
    <>
      {" "}
      <FiMenu
        size="1.5em"
        className="cursor-pointer text-gray-800 sm:block md:block lg:hidden xl:hidden"
        onClick={onOpen}
      />
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent >
          <DrawerHeader
            borderBottom=""
            className="bg-white  "
            
          >
            <NavbarContent  justify="start">
            <div className="p-4 shadow-sm flex gap-2">
            <Avatar
              as="button"
              className="transition-transform "
              color="secondary"
              name="Jason Hughes"
              size="4"
              src="/PFP.jpg"
            />
            <h1 className="mt-1 text-sm">Anggap aja nama</h1>
          </div>
              <DrawerCloseButton
                className="text-black cursor-pointer sm:block md:block lg:hidden xl:hidden"
                onClick={onClose}
              />
            </NavbarContent>
          </DrawerHeader>
          <DrawerBody className="bg-white  ">
   

          <div className="flex gap-5 justify-start pl-2 h-8 rounded-md cursor-pointer hover:bg-gray-100">
              <SiBloglovin className="mt-2" />
              <h1 className="mt-1">Blog</h1>
            </div>
            <div className="flex gap-5 justify-start pl-1 h-8 rounded-md cursor-pointer hover:bg-gray-100">
              <MdMarkAsUnread className="mt-2" />
              <h1 className="mt-1">Read Message</h1>
            </div>
            <div className="flex gap-5 justify-start pl-2 h-8 rounded-md cursor-pointer hover:bg-gray-100">
              <SiBloglovin className="mt-2" />
              <h1 className="mt-1">Lorem ipsum dolor s</h1>
            </div>
          </DrawerBody>
         
        </DrawerContent>
      </Drawer>
    </>
  );
}
