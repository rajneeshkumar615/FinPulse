import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3002",
});

// Attach token header if present
const token = localStorage.getItem("token");
if (token) api.defaults.headers.common["authorization"] = token;

// Global response interceptor: redirect to login when unauthorized
api.interceptors.response.use(
  (resp) => resp,
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem("token");
      // send user back to landing page login with expired flag
      window.location.href = "http://localhost:3000/login?expired=1";
    }
    return Promise.reject(error);
  }
);

export default api;
