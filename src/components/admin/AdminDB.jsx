import React from "react";
import { RiAdminFill } from "react-icons/ri";
import { Avatar, Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { SiBloglovin } from "react-icons/si";
import { MdEventSeat } from "react-icons/md";
import { FaRegPlusSquare } from "react-icons/fa";
export default function AdminDB() {
  return (
    <>
      <div className="flex flex-cols-2 md:flex-row min-h-screen bg-slate-100 text-gray-800 ">
        
        <div className="p-4 sm:ml-64">
          <div className="mb-4">
            <h1 className="text-2xl font-semibold mb-2">
              Selamat datang di Admin dashboard
            </h1>
            <h2>Email Admin: farelWibu@gmail.com</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
              <Card className="py-4 ">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">
                    Daily Commision
                  </p>
                  <small className="text-default-500">Update Only</small>
                  <div className="flex gap-5 ">
                    <h4 className="font-bold text-lg cursor-pointer">Create Blog </h4>
                  </div>
                </CardHeader>
                
              </Card>
              <Card className="py-4 ">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">
                    Daily Commision
                  </p>
                  <small className="text-default-500">sus message</small>
                  <div className="flex gap-5 ">
                    <h4 className="font-bold text-lg cursor-pointer">Bonk Message </h4>
                  </div>
                </CardHeader>
                
              </Card>
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">
                    Daily Commision
                  </p>
                  <small className="text-default-500">check</small>
                  <div className="flex gap-5 ">
                    <h4 className="font-bold text-lg cursor-pointer">See All Message </h4>
                  </div>
                </CardHeader>
                <CardBody className="overflow-visible py-2"></CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
