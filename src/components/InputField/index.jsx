import React from "react";
import { ErrorMessage } from "formik";

function InputField({
  type,
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
  errorMessage,
}) {
  return (
    <fieldset className="inputfield__group">
      <label className="inputfield__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="inputfield__input"
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off"
      />

      {errorMessage && (
        <span className="inputfield__error">{errorMessage}</span>
      )}
    </fieldset>
  );
}

export default InputField;
