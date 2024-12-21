import { Spinner } from "@phosphor-icons/react";

const Loader = () => {
  return (
    <span className="loader">
      <Spinner size={16} color="#fff" className="loader--icon" />
    </span>
  );
};

export default Loader;
