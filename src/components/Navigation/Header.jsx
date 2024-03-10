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

export default function Header() {
  return (
    <>
      <main>
        <section>
          <Navbar className="shadow-sm p-2">
            <NavbarBrand>
              <p className="font-bold text-inherit">Letter4T</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <Link color="foreground" href="/about">
                  What's L4T?
                </Link>
              </NavbarItem>
              <NavbarItem isActive>
                <Link href="#" aria-current="page">
                  Safety Center
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="/faq">
                  FAQ
                </Link>
              </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
              <NavbarItem className="hidden lg:flex">
                <Link href="/login">Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Button as={Link} color="primary" href="/register" variant="flat">
                  Sign Up
                </Button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
        </section>
      </main>
    </>
  );
}
