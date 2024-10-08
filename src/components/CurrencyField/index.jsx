import React from "react";
import Cleave from "cleave.js/react";
import CurrencyDropdown from "../DropDown";

function CurrencyField({
  label,
  id,
  name,
  value,
  type,
  value2,
  placeholder,
  onChange,
  onSelectChange,
}) {
  return (
    <fieldset className="currency__converter">
      <div className="currency__input">
        <label htmlFor={id}>{label}</label>
        {/* <input
          type={type}
          name={name}
          id={id}
          autoComplete="off"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        /> */}

        <Cleave
          // type={"text"}
          name={name}
          id={id}
          autoComplete="off"
          placeholder={placeholder}
          options={{ numeral: true, numeralThousandsGroupStyle: "thousand" }}
          value={value}
          onChange={onChange}
        />
      </div>
      <div className="currency__dropdown">
        <CurrencyDropdown handleChange={onSelectChange} value={value2} />

        <span className="currency__icon">
          <svg
            className="currency__svg"
            width="14"
            height="7"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.7803 0.219668C10.0732 0.512558 10.0732 0.987438 9.7803 1.28033L5.53033 5.5303C5.23744 5.8232 4.76256 5.8232 4.46967 5.5303L0.219668 1.28033C-0.0732225 0.987438 -0.0732225 0.512558 0.219668 0.219668C0.512558 -0.0732225 0.987438 -0.0732225 1.28033 0.219668L5 3.93934L8.7197 0.219668C9.0126 -0.0732225 9.4874 -0.0732225 9.7803 0.219668Z"
              fill="#0B0C0F"
            />
          </svg>
        </span>
      </div>
    </fieldset>
  );
}

export default CurrencyField;
