const loginURL = `${import.meta.env.VITE_VS_API_URL}:${
  import.meta.env.VITE_VS_PORT
}/vs/dashboard/users/login`;

const signupURL = `${import.meta.env.VITE_VS_API_URL}:${
  import.meta.env.VITE_VS_PORT
}/vs/dashboard/users/register`;

const dashboardURL = `${import.meta.env.VITE_VS_DASHBOARD_URL}/dashboard`;

const credentials = btoa(
  `${import.meta.env.VITE_VS_USERNAME}:${import.meta.env.VITE_VS_PASSWORD}`
);

export { loginURL, signupURL, dashboardURL, credentials };
