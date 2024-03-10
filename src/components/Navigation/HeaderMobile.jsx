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
} from "@nextui-org/react";

import { supabase } from "../../utils/supabase";
import { useState, useEffect } from "react";

export default function HeaderMobile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();
        if (error) {
          throw error;
        }
        setUserData(user);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchUserData();
  }, []);
const handleLogOut = async()=>{
  try{
    const {error} = await supabase.auth.signOut();
  }catch(error){
    console.error("gagal Logout")
  }
}
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
                isBordered
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
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">My Mail</DropdownItem>

              <DropdownItem key="logout" color="danger"><button onClick={handleLogOut}>

                Log Out
              </button>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
