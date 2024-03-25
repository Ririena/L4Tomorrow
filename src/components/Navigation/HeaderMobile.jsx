import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Card,
  Spacer,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
// import { Input } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "../../utils/supabase";
import { useState, useEffect } from "react";

export default function HeaderMobile() {
  const [userData, setUserData] = useState({
    profile: "",
  });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [userEmail, setUserEmail] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [newUserName, setNewUserName] = useState("");
  const [existingUserName, setExistingUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [verify, setVerify] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();
        if (error) {
          console.error(error.message);
        } else {
          setUserEmail(user.email);

          const { data, error } = await supabase
            .from("user")
            .select("*")
            .eq("email", user.email)
            .single();
          if (error) {
            console.error(error.message);
          } else {
            if (data) {
              setExistingUserName(data.nama_user);
            }
            setUserData(data || {});
            console.log(data);

            const res = await supabase.storage
              .from("avatar")
              .getPublicUrl(data.avatar);
            if (res.error) {
              console.error(error.message);
            } else {
              setAvatarUrl(res.data.publicUrl);
              console.log(data);
            }
          }
        }
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const avatarFileName = uuidv4();
        const { data, error } = await supabase.storage
          .from("avatar")
          .upload(avatarFileName, file, { cacheControl: "3600" });
        if (error) {
          throw error;
        }
        const avatarUrl = data.publicURL;
        setAvatarUrl(avatarUrl);

        await supabase
          .from("user")
          .update({ avatar: avatarFileName })
          .eq("email", userEmail);
      } catch (error) {
        console.error("Error updating avatar:", error.message);
      }
    }
  };

  const handleSubmit = async () => {
    console.log("Changes saved!");
  };

  const handleLogOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
    } catch (error) {
      console.error("gagal Logout");
    }
  };
  const handleAddData = async () => {
    try {
      if (existingUserName) {
        console.log("Nama sudah ada:", existingUserName);
        return;
      }

      const { data, error } = await supabase
        .from("user")
        .insert([{ email: userEmail, nama_user: newUserName, Verified: true }]);
      if (error) {
        console.error(error.message);
      } else {
        console.log("Data added successfully:", data);
        setNewUserName("");
        setVerify(true);
        navigate("/");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <Navbar className="shadow-sm">
        <NavbarBrand>
          <p className="font-bold text-inherit">L4Tomorrow</p>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/me">
              Main
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/me/mail" aria-current="page" color="secondary">
              My Mail
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
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
                size="sm"
                src="/PFP.jpg"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">
                  {userData ? userData.email : "Loading..."}
                </p>
              </DropdownItem>
              <DropdownItem key="settings" onPress={onOpen}>
                My Settings
              </DropdownItem>
              <DropdownItem key="team_settings">My Mail</DropdownItem>
              <DropdownItem key="avatar">Edit Profile</DropdownItem>
              <DropdownItem key="logout" color="danger">
                <button onClick={handleLogOut}>
                  <a href="/login">Log Out</a>
                </button>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                My Settings
              </ModalHeader>
              <ModalBody>
                {existingUserName ? (
                  <>
                    {" "}
                    <p>Profile image</p>
                    <div className="flex gap-4">
                      <Avatar
                        color="secondary"
                        className="w-20 h-20 ml-1"
                        src={avatarUrl}
                      />
                      <input
                        type="file"
                        onChange={handleAvatarChange}
                        className="hidden"
                        id="avatar"
                      />
                      <Button
                        color="secondary"
                        variant="ghost"
                        className="mt-4"
                      >
                        <label
                          htmlFor="avatar"
                          className="cursor-pointer  px-4 py-2 rounded-md text-sm"
                        >
                          Upload Avatar
                        </label>
                      </Button>
                    </div>
                    <h1 className="capitalize text-sm  text-violet-700">
                      {userData.email}
                    </h1>
                    <p>User Name</p>
                    <input
                      value={newUserName}
                      onChange={(e) => setNewUserName(e.target.value)}
                      type="text"
                      className="block w-full h-10 rounded-sm border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-violet-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                      size="lg"
                      placeholder={userData.nama_user}
                    />
                      <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
                  </>
                ) : (
                  <>
                    <p>User Name</p>
                    <input
                      value={newUserName}
                      onChange={(e) => setNewUserName(e.target.value)}
                      type="text"
                      className="block w-full h-10 rounded-sm border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-violet-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                      size="lg"
                      placeholder={userData.nama_user}
                    />
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
                  </>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
