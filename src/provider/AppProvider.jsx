import { NextUIProvider } from "@nextui-org/react";
import { ChakraProvider } from "@chakra-ui/react";
import {ThemeProvider as NextThemeProvider} from "next-themes"
export const AppWrapper = ({ children }) => {
  return (
    <ChakraProvider>
      <NextUIProvider>
      <NextThemeProvider attribute="class" defaultTheme="light">
      {children}
      </NextThemeProvider>
      </NextUIProvider>
    </ChakraProvider>
  );
};
