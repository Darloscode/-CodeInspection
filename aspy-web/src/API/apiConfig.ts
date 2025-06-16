// Define a constant for the default API URL
const defaultApiURL = "https://aspy-production.up.railway.app/api";
const domain = "aspy.ecuador";

// Determine the correct API URL based on the environment
const apiURL = import.meta.env.VITE_APP_ENV === "production"
  ? `https://api.${domain}`
  : defaultApiURL;

export default apiURL;
