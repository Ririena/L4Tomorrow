import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Button,
} from "@nextui-org/react";
import { getUserByEmail, getUserFromTable } from "../../libs/UserLibs";
import { supabase } from "../../utils/supabase";
import { useState, useEffect } from "react";
import {
  Modal,
  ModalFooter,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
export default function HeaderMobile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Mendapatkan data pengguna dari autentikasi
        const user = await getUserByEmail();
        setUserEmail(user.email);

        // Mendapatkan data pengguna dari tabel user
        const userDataFromTable = await getUserFromTable(user.email);
        setUserData(userDataFromTable);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div></div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        <Navbar isBordered className="shadow-sm bg-gradient-to-r from-violet-500 to-violet-700">
          <NavbarBrand>
            <p className="font-bold text-inherit text-slate-200">L4Tomorrow</p>
          </NavbarBrand>

          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="" className="text-purple-100" href="/me">
                Main
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link
                href="/me/mail"
                className="text-purple-100"
                aria-current="page"
                color="secondary"
              >
                My Mail
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" className="text-purple-100" href="#">
                Integrations
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent as="div" justify="end">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name="Jason Hughes"
                  size="md"
                  src={userData ? userData.avatar : "/PFP.jpg"}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">
                    {userData ? userData.email : "Loading..."}
                  </p>
                </DropdownItem>
                <DropdownItem key="settings" onClick={onOpen}>
                  My Settings
                </DropdownItem>
                <DropdownItem key="team_settings">My Mail</DropdownItem>

                <DropdownItem key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
        </Navbar>
    </>
  );
}
