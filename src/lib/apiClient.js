import axios from "axios";
import { config } from "../../public/config";

const apiClient = axios.create({
  baseURL: config.BASE_URL, 
  headers: {
    "Content-Type": "application/json",
    // Add other default headers here
  },
});

// Request interceptor to add authorization token to headers
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Adjust token retrieval as needed
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for centralized error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    console.error("API call error:", error);
    // Optionally, display notifications or redirect based on error status
    return Promise.reject(error);
  }
);

export default apiClient;
