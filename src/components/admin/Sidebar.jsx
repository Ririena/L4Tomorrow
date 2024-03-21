import React from "react";
import { RiAdminFill } from "react-icons/ri";
import { Avatar, Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { SiBloglovin } from "react-icons/si";
import { MdEventSeat } from "react-icons/md";
import { FaRegPlusSquare } from "react-icons/fa";
export default function Sidebar() {
  return (
    <>
        <div className="fixed hidden md:block lg:block xl:block  w-full md:w-1/5 bg-gray-200  h-screen ">
          <div className="p-4 shadow-sm flex gap-2">
            <Avatar
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="/PFP.jpg"
            />
            <h1 className="mt-1">Anggap aja nama</h1>
          </div>
          <div className="mt-4">
            <div className="flex gap-5 justify-start pl-2 w-60 h-8 rounded-md cursor-pointer hover:bg-gray-300">
              <SiBloglovin className="mt-2" />
              <h1 className="mt-1">Blog</h1>
            </div>
            <div className="flex gap-5 justify-start pl-2 w-60 h-8 rounded-md cursor-pointer hover:bg-gray-300">
              <SiBloglovin className="mt-2" />
              <h1 className="mt-1">Blog</h1>
            </div>
            <div className="flex gap-5 justify-start pl-2 w-60 h-8 rounded-md cursor-pointer hover:bg-gray-300">
              <SiBloglovin className="mt-2" />
              <h1 className="mt-1">Lorem ipsum dolor s</h1>
            </div>
          </div>
        </div>
    </>
  )
}
