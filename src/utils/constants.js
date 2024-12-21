const loginURL = `${import.meta.env.VITE_VS_API_URL}:${
  import.meta.env.VITE_VS_PORT
}/vs/dashboard/users/login`;

const dashboardURL = `${import.meta.env.VITE_VS_DASHBOARD_URL}/dashboard`;

const credentials = btoa(
  `${import.meta.env.VITE_VS_USERNAME}:${import.meta.env.VITE_VS_PASSWORD}`
);

export { loginURL, dashboardURL, credentials };
