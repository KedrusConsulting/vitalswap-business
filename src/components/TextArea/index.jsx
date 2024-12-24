import React from "react";

function TextArea({
  value,
  label,
  id,
  name,
  onChange,
  placeholder,
  errorMessage,
}) {
  return (
    <fieldset className="inputfield__group">
      <label className="inputfield__label" htmlFor={id}>
        {label}
      </label>

      <textarea
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="inputfield__description"
        placeholder={placeholder}
      ></textarea>

      {errorMessage && (
        <span className="inputfield__error">{errorMessage}</span>
      )}
    </fieldset>
  );
}

export default TextArea;
