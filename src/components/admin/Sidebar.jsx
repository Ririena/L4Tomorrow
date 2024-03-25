import React from "react";
import { Avatar, Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { RiAdminFill } from "react-icons/ri";
import { SiBloglovin } from "react-icons/si";
import { MdEventSeat, MdMarkAsUnread } from "react-icons/md";
import { FaRegPlusSquare } from "react-icons/fa";
export default function Sidebar() {
  return (
    <>
        <div className="fixed hidden md:block lg:block xl:block  w-full md:w-1/5 bg-white  h-screen ">
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
            <div className="flex gap-5 justify-start pl-2 w-60 h-8 rounded-md cursor-pointer hover:bg-gray-100">
              <SiBloglovin className="mt-2" />
              <h1 className="mt-1">Blog</h1>
            </div>
            <div className="flex gap-5 justify-start pl-1 w-60 h-8 rounded-md cursor-pointer hover:bg-gray-100">
              <MdMarkAsUnread className="mt-2" />
              <h1 className="mt-1">Read Message</h1>
            </div>
            <div className="flex gap-5 justify-start pl-2 w-60 h-8 rounded-md cursor-pointer hover:bg-gray-100">
              <SiBloglovin className="mt-2" />
              <h1 className="mt-1">Lorem ipsum dolor s</h1>
            </div>
          </div>
        </div>
    </>
  )
}
