import { NextUIProvider } from "@nextui-org/react";
import { ChakraProvider } from "@chakra-ui/react";

export const AppWrapper = ({ children }) => {
  return (
    <ChakraProvider>
      <NextUIProvider>
      {children}
      </NextUIProvider>
    </ChakraProvider>
  );
};
