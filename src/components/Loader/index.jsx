import React from "react";
import loaderGif from "../../assets/loader_transparent.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={loaderGif} alt="loader" height={300} />
    </div>
  );
};

export default Loader;
