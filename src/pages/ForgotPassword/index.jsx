import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import InputField from "../../components/InputField";

import vsLogo from "../../assets/vitalswap-logo2.svg";
import userImg from "../../assets/user-3.png";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { otpURL } from "../../utils/constants";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Please enter a valid email").required(),
  });

  const onSubmit = async (values, { resetForm }) => {
    const { email } = values;

    try {
      const res = await axios.get(
        `${otpURL}?email=${encodeURIComponent(email)}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (res?.status === 200) {
        const { message } = res.data;

        toast.success(
          message || "OTP sent successfully. Please check your email!"
        );

        navigate("/verify-email", { state: { email } });
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          err.response?.data?.error ||
          err?.message ||
          "Unable to send OTP. Please try again!"
      );
    } finally {
      resetForm();
    }
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
            The hassle to receive payment from Africa ends here. VitalSwap for
            business opens doors to new opportunities for cross border
            transactions between Africa and the world.
          </p>

          <blockquote className="signup__testimonial">
            <p className="signup__quote">
              I had an amazing experience! My transaction was seamless when I
              initiated a transfer from my wallet, my bank account was credited
              within seconds. Kudos!
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
            <h1>Forgot Password!</h1>
            <p>Enter your vitalswap email to recover account. </p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, handleChange, handleSubmit, dirty, isSubmitting }) => (
              <form className="signup__form" onSubmit={handleSubmit}>
                <InputField
                  type="email"
                  name="email"
                  id="email"
                  label="Email Address"
                  placeholder="example@example.com"
                  value={values.email}
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  className="btn btn--primary"
                  disabled={!dirty}
                >
                  {isSubmitting ? "Please wait..." : "Continue"}
                </button>
              </form>
            )}
          </Formik>

          <p className="signup__forgot">
            Go back to <Link to="/signin">Signin</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
