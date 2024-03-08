import { useState } from "react";
import { Card, CardFooter } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
const Footer = () => {
  return (
    <>
        <div className="relative">
          <Card className="absolute inset-x-0 bottom-0">
            <div className="bg-slate-50 p-4">
              <h1 className="text-2xl">Hello World</h1>
            </div>
          </Card>
        </div>
    </>
  );
};

export default Footer;
