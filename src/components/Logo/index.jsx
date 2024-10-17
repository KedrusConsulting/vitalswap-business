import React from "react";
import { Link } from "react-router-dom";
import vsLogoBlue from "../../assets/vitalswap-logo.svg";
import vsLogoWhite from "../../assets/vitalswap-logo2.svg";
import vsLogoIcon from "../../assets/vitalswap-icon.svg";

function Logo({ type }) {
  return (
    <Link className="" to="/">
      <div className="vitalswap-logo">
        {type === "white" && <img src={vsLogoWhite} alt="Vitalswap Logo" />}
        {type === "blue" && <img src={vsLogoBlue} alt="Vitalswap Logo" />}
        {type === "icon" && <img src={vsLogoIcon} alt="Vitalswap Logo" />}
        {!type && <img src={vsLogoWhite} alt="Vitalswap Logo" />}
      </div>
    </Link>
  );
}

export default Logo;
