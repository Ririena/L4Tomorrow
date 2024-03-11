import React, { useState, useEffect } from "react";
import { getUserByEmail, getUserFromTable } from "../libs/UserLibs";
import {
  Image,
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { redirect, useNavigate } from "react-router-dom";

export default function NotFounds() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await getUserByEmail();
        setUserEmail(user.email);

        const userDataFromTable = await getUserFromTable(user.email);
        setUserData(userDataFromTable);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchUserData();
  }, []);

  function back() {
    navigate("/");
  }

  return (
    <main>
      {userData ? (
        <section>
          <div className="flex justify-center items-center h-screen">
            <Card>
              <CardHeader>
                <div className="mx-auto">
                  <h1 className="text-md font-bold">
                    I'm Sorry Major{" "}
                    <span className="uppercase">({userData.nama_user})</span>{" "}
                    The Mail Was Not Found
                  </h1>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <div>
                  <Image className="block" src="/tenor.gif" />
                </div>
              </CardBody>
              <Divider />
              <CardFooter>
                <div className="mx-auto">
                  <Button onClick={back} color="secondary" variant="shadow">
                    Back
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </section>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <Card>
            <CardHeader>
              <div className="mx-auto">
                <h1 className="text-md font-bold">
                  I'm Sorry Major Gilbert The Mail Was Not Found
                </h1>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <div>
                <Image className="block" src="/tenor.gif" />
              </div>
            </CardBody>
            <Divider />
            <CardFooter>
              <div className="mx-auto">
                <Button onClick={back} color="secondary" variant="shadow">
                  Back
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      )}
    </main>
  );
}
