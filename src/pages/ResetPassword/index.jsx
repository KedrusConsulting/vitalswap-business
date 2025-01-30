import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import InputField from "../../components/InputField";
import vsLogo from "../../assets/vitalswap-logo2.svg";
import userImg from "../../assets/user-3.png";
import { resetPasswordURL } from "../../utils/constants";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location?.state?.email || "";
  const otp_id = location?.state?.otp_id || "";

  if (!email || !otp_id) {
    toast.error("Invalid password reset request.");
    navigate("/forgot-password", { replace: true });
    return null;
  }

  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("newPassword")], "Passwords must match"),
  });

  const onSubmit = async (values, { resetForm }) => {
    const payload = {
      email,
      password: values.newPassword,
      confirm_password: values.confirmPassword,
      otp_id,
    };

    try {
      const res = await axios.post(resetPasswordURL, payload, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (res.status === 200) {
        toast.success("Password reset successful! Please log in.");
        navigate("/signin", { replace: true });
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Unable to reset password"
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
            business opens doors to new opportunities for cross-border
            transactions between Africa and the world.
          </p>
          <blockquote className="signup__testimonial">
            <p className="signup__quote">
              I had an amazing experience! My transaction was seamless when I
              initiated a transfer from my wallet. My bank account was credited
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
            <h1>Reset Password!</h1>
            <p>Set a new password for your account.</p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              touched,
              errors,
            }) => (
              <form className="signup__form" onSubmit={handleSubmit}>
                <InputField
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  label="New Password"
                  placeholder="********"
                  value={values.newPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errorMessage={touched.newPassword && errors.newPassword}
                />

                <InputField
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  label="Confirm Password"
                  placeholder="********"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errorMessage={
                    touched.confirmPassword && errors.confirmPassword
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

          <p className="signup__forgot">
            Go back to <Link to="/signin">Signin</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
