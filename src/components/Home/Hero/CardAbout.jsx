import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Input,
  Divider,
  Spacer,
  Image,
  Link,
} from "@nextui-org/react";
export default function CardAbout() {
  return (
    <>
      <div>
        <Card className="max-w-sm md:max-w-md lg:xl:max-w-lg">
        <Image src="/violetP.jpg" className="object-cover "/>
        </Card>
      </div>
    </>
  );
}
