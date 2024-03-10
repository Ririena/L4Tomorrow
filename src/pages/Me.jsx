import React, {Suspense, lazy} from "react";
const LazyRetrieveUser = lazy(() => import("../components/Main/RetrieveUser"))
const LazyMainCard = lazy(() =>
  import("../components/Main/MainCard.jsx")
);
export default function Me() {
  return (
    <>
      {/* RETRIEVE USER*/}
   
      
            <Suspense fallback="Load">
              <LazyMainCard />
            </Suspense>

            <Suspense fallback="Lagi Load Bang">
            <LazyRetrieveUser/>
            </Suspense>
   
    </>
  );
}
