import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Draw from "./Drawer";

export default function Header() {
  return (
    <>
      <main>
        <section>
          <Navbar className="bg-gradient-to-r from-violet-600 via-violet-700 to-violet-800  text-white ">
            <NavbarBrand>
              <p className="font-bold text-white text-xl">Letter4T</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <Link href="/about" className="text-white">
                  What's L4T?
                </Link>
              </NavbarItem>
              <NavbarItem isActive>
                <Link href="#" aria-current="page" className="text-violet-300">
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
              <NavbarItem className="hidden lg:flex ">
                <Link href="/login" className="text-slate-200">Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Button as={Link}   href="/register" variant="solid" className="text-violet-800 bg-violet-400" >
                  Sign Up
                </Button>
              </NavbarItem>
            <Draw/>
            </NavbarContent>
          </Navbar>
        </section>
      </main>
    </>
  );
}
