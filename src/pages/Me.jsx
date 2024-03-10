import React, {Suspense, lazy} from "react";
import RetrieveUser from "../components/Main/RetrieveUser";
import LayoutsUser from "../components/Layout/LayoutsUser";
const LazyRetrieveUser = lazy(() => import("../components/Main/RetrieveUser"))
const LazyMainCard = lazy(() =>
  import("../components/Main/MainCard.jsx")
);
export default function Me() {
  return (
    <>
      {/* RETRIEVE USER*/}
      <main>
        <section>
          <div>
            <LayoutsUser />
            <Suspense fallback="Load">
              <LazyMainCard />
            </Suspense>

            <Suspense fallback="Lagi Load Bang">
            <LazyRetrieveUser/>
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
}
