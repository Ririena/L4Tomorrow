import React from "react";
import RetrieveUser from "../components/Main/RetrieveUser";
import LayoutsUser from "../components/Layout/LayoutsUser";
import MainCard from "../components/Main/MainCard";
export default function Me() {
  return (
    <>
      {/* RETRIEVE USER*/}
      <main>
        <section>
          <div>
          <LayoutsUser/>
          <MainCard/>
          
            <RetrieveUser/>
          </div>
        </section>
      </main>
    </>
  );
}
