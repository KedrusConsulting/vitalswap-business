import { useRef } from "react";
import PropTypes from "prop-types";

export const OTPField = ({
  length = 6,
  value,
  onChange,
  onComplete,
  error,
}) => {
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    const val = e.target.value.replace(/\D/g, "");
    let newOTP = value.split("");

    if (val) {
      newOTP[index] = val;
      onChange(newOTP.join(""));
      if (index < length - 1) inputRefs.current[index + 1]?.focus();
    }

    if (newOTP.join("").length === length) {
      onComplete(newOTP.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      let newOTP = value.split("");

      if (!newOTP[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }

      newOTP[index] = "";
      onChange(newOTP.join(""));
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, length);

    if (/^\d+$/.test(pasteData)) {
      const newOTP = pasteData.split("").slice(0, length);
      onChange(newOTP.join(""));

      inputRefs.current[Math.min(pasteData.length, length) - 1]?.focus();

      if (pasteData.length === length) {
        onComplete(newOTP.join(""));
      }
    }
  };

  return (
    <fieldset
      className={`inputfield__group inputfield__otp ${
        error ? "inputfield__error" : ""
      }`}
    >
      <label htmlFor="otp" className="inputfield__label">
        &nbsp;
      </label>
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          className="inputfield__input"
          inputMode="numeric"
          pattern="[0-9]*"
          type="text"
          value={value[index] || ""}
          maxLength={1}
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          ref={(ref) => (inputRefs.current[index] = ref)}
        />
      ))}
    </fieldset>
  );
};

OTPField.propTypes = {
  length: PropTypes.number,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  error: PropTypes.string,
};
