import axios from "axios";

// Create an Axios instance
// const axiosInstance = axios.create();
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000, // Timeout of 5 seconds
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false, // Send cookies or HTTP authentication with cross-site requests
  responseType: 'json', // Expect JSON response from the server
  validateStatus: function (status) {
    return status >= 200 && status < 500; // Only treat status codes between 200 and 499 as successful
  },
  // Other Axios options if needed
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Check if the request URL matches Cloudinary API
        if (config.url.startsWith("http")) {
      // Remove the Authorization header
      delete config.headers["Authorization"];
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;