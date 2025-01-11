import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import InputField from "../../components/InputField";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";

import vsLogo from "../../assets/vitalswap-logo2.svg";
import userImg from "../../assets/user-3.png";
import { Link, useNavigate } from "react-router-dom";
import { credentials, signupURL } from "../../utils/constants";
import countries from "../../countries.json";
import toast from "react-hot-toast";

function SignUp() {
  const navigate = useNavigate();

  const [countriesOptions, setCountriesOptions] = useState([
    { label: "Select Country", value: "" },
  ]);

  const initialValues = {
    firstname: "",
    lastname: "",
    companyName: "",
    email: "",
    phone: "",
    countryOfBusiness: "",
    password: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    companyName: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.string().required(),
    countryOfBusiness: Yup.string().required(),
    password: Yup.string().required(),
    description: Yup.string().required(),
  });

  const onSubmit = async (values, { resetForm }, onSubmitProps) => {
    const payload = {
      firstName: values.firstname,
      lastName: values.lastname,
      businessName: values.companyName,
      email: values.email,
      phoneNumber: values.phone,
      businessDescription: values.description,
      countryOfBusiness: values.countryOfBusiness,
      password: values.password,
      acceptTerms: true,
    };

    try {
      const res = await axios.post(signupURL, payload, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (res?.status === 200) {
        const { message } = res?.data;

        toast.success(message);
        navigate("/signin");
      }
    } catch (err) {
      toast.error(
        err.response?.data?.error ||
          err.response?.data?.message ||
          err?.message ||
          "Unable to login"
      );
    }
  };

  useEffect(() => {
    const getCountries = async () => {
      const data = countries;
      const formattedCountries = data.map((res) => {
        return { label: res.name, value: res.name };
      });

      setCountriesOptions((prev) => [...prev, ...formattedCountries]);
    };

    getCountries();
  }, []);

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
            <h1>Sign Up</h1>
            <p>
              Already have an account? <Link to="#">Login</Link>
            </p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              dirty,
              isSubmitting,
              errors,
              touched,
            }) => (
              <form className="signup__form" onSubmit={handleSubmit}>
                <div className="signup__wrapper">
                  <InputField
                    type="text"
                    name="firstname"
                    id="firstname"
                    label="First Name"
                    placeholder="John"
                    value={values.firstname}
                    onChange={handleChange}
                    errorMessage={touched.firstname && errors.firstname}
                  />

                  <InputField
                    type="text"
                    name="lastname"
                    id="lastname"
                    label="Last Name"
                    placeholder="Adebayo"
                    value={values.lastname}
                    onChange={handleChange}
                    errorMessage={touched.lastname && errors.lastname}
                  />
                </div>

                <InputField
                  type="text"
                  name="companyName"
                  id="companyName"
                  label="Company Name"
                  placeholder="VitalSwap"
                  value={values.companyName}
                  onChange={handleChange}
                  errorMessage={touched.companyName && errors.companyName}
                />

                <InputField
                  type="email"
                  name="email"
                  id="email"
                  label="Email Address"
                  placeholder="example@example.com"
                  value={values.email}
                  onChange={handleChange}
                  errorMessage={touched.email && errors.email}
                />

                <InputField
                  type="text"
                  name="phone"
                  id="phone"
                  label="Phone Number"
                  placeholder="+234 805 438 3489"
                  value={values.phone}
                  onChange={handleChange}
                  errorMessage={touched.phone && errors.phone}
                />

                <Select
                  options={countriesOptions}
                  name="countryOfBusiness"
                  id="countryOfBusiness"
                  label="Country of Business"
                  value={values.countryOfBusiness}
                  onChange={handleChange}
                  errorMessage={
                    touched.countryOfBusiness && errors.countryOfBusiness
                  }
                />

                <TextArea
                  name="description"
                  id="description"
                  label="Description of Business"
                  value={values.description}
                  placeholder="Tell us about your business"
                  onChange={handleChange}
                  errorMessage={touched.description && errors.description}
                />

                <InputField
                  type="password"
                  name="password"
                  id="password"
                  label="Enter your password"
                  placeholder="******"
                  value={values.password}
                  onChange={handleChange}
                  errorMessage={touched.password && errors.password}
                />

                <button
                  type="submit"
                  className="btn btn--primary"
                  disabled={!dirty}
                >
                  {isSubmitting ? "Please wait..." : "Get Started"}
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
