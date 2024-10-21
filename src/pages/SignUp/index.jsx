import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import InputField from "../../components/InputField";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";

import vsLogo from "../../assets/vitalswap-logo2.svg";
import userImg from "../../assets/user-3.png";
import { Link } from "react-router-dom";

function SignUp() {
  const [countriesOptions, setCountriesOptions] = useState([
    { label: "Select Country", value: "" },
  ]);
  const [showAlert, setShowAlert] = useState(false);

  const initialValues = {
    firstname: "",
    lastname: "",
    companyName: "",
    email: "",
    phone: "",
    countryOfBusiness: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    companyName: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.string().required(),
    countryOfBusiness: Yup.string().required(),
    description: Yup.string().required(),
  });

  const onSubmit = async (values, { resetForm }, onSubmitProps) => {
    try {
      const data = {
        first_name: values.firstname,
        last_name: values.lastname,
        company_name: values.companyName,
        email_address: values.email,
        email: values.email,
        phone_number: values.phone,
        business_description: values.description,
        country_of_Business: values.countryOfBusiness,
      };

      const res = await axios.post(
        "https://vitalswap.com/test/api_v2/users/webForm",
        data
      );

      if (res.status === 200) {
        await onSubmitProps?.setSubmitting(false);
        resetForm();
        setShowAlert(true);

        setInterval(() => setShowAlert(false), 10000);
      }

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getCountries = async () => {
      const res = await axios.get("https://restcountries.com/v2/all");

      const data = res.data;
      const countries = data.map((res) => {
        return { label: res.name, value: res.name };
      });

      setCountriesOptions((prev) => [...prev, ...countries]);
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
            {({ values, handleChange, handleSubmit, dirty, isSubmitting }) => (
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
                  />

                  <InputField
                    type="text"
                    name="lastname"
                    id="lastname"
                    label="Last Name"
                    placeholder="Adebayo"
                    value={values.lastname}
                    onChange={handleChange}
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
                />

                <InputField
                  type="email"
                  name="email"
                  id="email"
                  label="Email Address"
                  placeholder="example@example.com"
                  value={values.email}
                  onChange={handleChange}
                />

                <InputField
                  type="text"
                  name="phone"
                  id="phone"
                  label="Phone Number"
                  placeholder="+234 805 438 3489"
                  value={values.phone}
                  onChange={handleChange}
                />

                <Select
                  options={countriesOptions}
                  name="countryOfBusiness"
                  id="countryOfBusiness"
                  label="Country of Business"
                  value={values.countryOfBusiness}
                  onChange={handleChange}
                />

                <TextArea
                  name="description"
                  id="description"
                  label="Description of Business"
                  value={values.description}
                  placeholder="Tell us about your business"
                  onChange={handleChange}
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
