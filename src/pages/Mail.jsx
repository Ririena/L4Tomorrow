import React from "react";
import MailCard from "../components/Main/MailCard";
import {Outlet} from "react-router-dom"
export default function Mail() {
  return (
    <>
      <main>
        <section>
          <div>
            <MailCard />
          </div>
        </section>
      </main>
      <Outlet/>
    </>
  );
}
