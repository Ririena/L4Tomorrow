import React from "react";
import { RiAdminFill } from "react-icons/ri";
import { Avatar, Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { SiBloglovin } from "react-icons/si";
import { MdEventSeat, MdMarkAsUnread } from "react-icons/md";
import { FaRegPlusSquare } from "react-icons/fa";
export default function AdminDB() {
  return (
    <>
      <div className=" md:flex-row min-h-screen bg-gray-50 text-gray-800 ">
        <div className="p-5 sm:ml-64">
          <div className="">
            <h1 className="text-2xl font-semibold mb-2">
              Selamat datang di Admin dashboard
            </h1>
            <h2>Email Admin: farelWibu@gmail.com</h2>
          </div>
        </div>
        <div className="p-4 sm:ml-64">
          <div className="gap-2 grid grid-cols-1 sm:grid-cols-3  ">
            <Card className="py-4 rounded-md ">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Commision</p>
                <small className="text-default-500">Update Only</small>
                <div className="flex gap-5 ">
                  <h4 className="font-bold text-lg cursor-pointer mx-auto">
                    Create Blog{" "}
                  </h4>
                </div>
              </CardHeader>
            </Card>
            <Card className="py-4 rounded-md">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Commision</p>
                <small className="text-default-500">sus message</small>
                <div className="flex gap-5 ">
                  <h4 className="font-bold text-lg cursor-pointer">
                    Bonk Message{" "}
                  </h4>
                </div>
              </CardHeader>
            </Card>
            <Card className="py-4 rounded-md">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Commision</p>
                <small className="text-default-500">sus message</small>
                <div className="flex gap-5 ">
                  <h4 className="font-bold text-lg cursor-pointer">
                    Check Message{" "}
                  </h4>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
