import { lazy, Suspense } from "react";
import Loader from "../Loader";

const Loadable = (Component) => () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Component />
      </Suspense>
    </>
  );
};

export default Loadable;
