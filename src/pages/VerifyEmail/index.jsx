import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import vsLogo from "../../assets/vitalswap-logo2.svg";
import userImg from "../../assets/user-3.png";
import { OTPField } from "../../components/OTPField";
import axios from "axios";
import { otpURL } from "../../utils/constants";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const VerifyEmail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const initialValues = {
    otp: "",
  };

  const validationSchema = Yup.object().shape({
    otp: Yup.string()
      .length(6, "OTP must be 6 digits")
      .required("OTP is required"),
  });

  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    const payload = {
      otp: values.otp,
      email: state.email,
    };

    try {
      const res = await axios.post(otpURL, payload, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (res?.status === 200) {
        const { message, otp_id } = res.data;

        toast.success(message || "Verification successful!");

        navigate("/reset-password", {
          state: { email: state?.email, otp_id },
          replace: true,
        });
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          err.response?.data?.error ||
          err?.message ||
          "Unable to login"
      );
    } finally {
      resetForm();
      setSubmitting(false);
    }
  };

  const handleOnComplete = async (values, formikHelpers) => {
    const { resetForm, setSubmitting } = formikHelpers;
    setSubmitting(true);
    const payload = { otp: values };
    await onSubmit(payload, { resetForm, setSubmitting });
  };

  return (
    <div className="signup">
      <div className="signup__left">
        <div className="signup__content">
          <figure className="signup__vs-logo">
            <img src={vsLogo} alt="Vitalswap logo" />
          </figure>
          <h2 className="signup__title">
            Make payments to businesses across the globe
          </h2>
          <p className="signup__text">
            The hassle to receive payment from Africa ends here...
          </p>
          <blockquote className="signup__testimonial">
            <p className="signup__quote">
              I had an amazing experience! My transaction was seamless...
            </p>
            <cite className="signup__cite">
              <img src={userImg} alt="User avatar" />
              <span>Justin Tochukwu</span>
            </cite>
          </blockquote>
        </div>
      </div>

      <div className="signup__right">
        <div className="signup__group">
          <div className="signup__header">
            <h1>Verify Email!</h1>
            <p>Please enter the OTP sent to your email.</p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              values,
              setFieldValue,
              resetForm,
              setSubmitting,
              handleSubmit,
              isSubmitting,
            }) => (
              <form className="signup__form" onSubmit={handleSubmit}>
                <OTPField
                  length={6}
                  value={values.otp}
                  onChange={(otp) => setFieldValue("otp", otp)}
                  onComplete={(values) =>
                    handleOnComplete(values, { resetForm, setSubmitting })
                  }
                />

                <button
                  type="submit"
                  className="btn btn--primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Please wait..." : "Continue"}
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
