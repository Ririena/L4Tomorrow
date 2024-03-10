import { lazy, useState, useEffect, Suspense } from "react";

const LazyMailid = lazy(() => import("../components/Main/MainMailParams"));
export default function MailId() {
  return (
    <>
      <main>
        <div>
          <Suspense fallback="Loading">
            <LazyMailid />
          </Suspense>
        </div>
      </main>
    </>
  );
}
