const loginURL = `${import.meta.env.VITE_VS_API_URL}/vs/dashboard/users/login`;
const otpURL = `${import.meta.env.VITE_VS_API_URL}/vs/dashboard/users/otp`;
const resetPasswordURL = `${
  import.meta.env.VITE_VS_API_URL
}/vs/dashboard/users/reset-password`;

const signupURL = `${
  import.meta.env.VITE_VS_API_URL
}/vs/dashboard/users/register`;

const dashboardURL = `${import.meta.env.VITE_VS_DASHBOARD_URL}/dashboard`;

export { loginURL, signupURL, dashboardURL, otpURL, resetPasswordURL };
