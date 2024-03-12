import React, { useState, useRef } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Divider,
  Input,
} from "@nextui-org/react";

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
import { RxHamburgerMenu } from "react-icons/rx";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

export default function Header() {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };

  return (
    <>
      <main>
        <section>
          {navbarVisible && (
            <Navbar className="shadow-sm p-2 bg-gradient-to-r from-violet-500 to-violet-700">
              <NavbarBrand>
                <p className="font-bold text-white">Letter4T</p>
              </NavbarBrand>
              <NavbarContent
                className="hidden  text-white sm:flex gap-4"
                justify="center"
              >
                <NavbarItem>
                  <Link color="foreground" className="text-white" href="/about">
                    What's L4T?
                  </Link>
                </NavbarItem>
                <NavbarItem isActive>
                  <Link href="#" aria-current="page" className="text-white">
                    Safety Center
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link color="foreground" href="/faq" className="text-white">
                    FAQ
                  </Link>
                </NavbarItem>
              </NavbarContent>

              <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                  <Link href="/login" className="text-white">
                    Login
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Button
                    as={Link}
                    className="hidden lg:flex xl:flex text-white"
                    color="white"
                    href="/register"
                    variant="flat"
                  >
                    Sign Up
                  </Button>

                  <Button
                    onClick={onOpen}
                    className="text-white lg:hidden xl:hidden"
                    variant="text"
                    color="secondary"
                  >
                    <RxHamburgerMenu size="2em" />
                  </Button>

                  <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                  >
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />
                      <DrawerHeader>Sidebar</DrawerHeader>
                      <Divider />

                      <DrawerBody>
                        <div className="flex justify-center">
                          <div className="flex flex-col gap-4 max-w-[150px] w-full">
                            <Button as={Link} href="/" color="secondary">
                              Menu
                            </Button>
                            <Button as={Link} href="/me/mail" color="secondary">
                              My Mail
                            </Button>
                            <Button as={Link} color="secondary"></Button>
                            <Button as={Link} color="secondary"></Button>
                            <Button as={Link} color="secondary"></Button>
                          </div>
                        </div>
                      </DrawerBody>

                      <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                          Cancel
                        </Button>
                        <Button colorScheme="blue">Save</Button>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </NavbarItem>
              </NavbarContent>
            </Navbar>
          )}

          <div className="fixed bottom-6 right-6">
            <Button
              onClick={toggleNavbar}
              className="bg-white text-gray-800 rounded-full p-2"
            >
              {navbarVisible ? (
                <FiArrowLeft size={24} />
              ) : (
                <FiArrowRight size={24} />
              )}
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
