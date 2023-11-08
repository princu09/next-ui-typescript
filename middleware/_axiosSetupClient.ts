import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

apiClient.interceptors.request.use(
  async (config) => {
    let token;

    token = Cookies.get("next-new-token");

    // If a session exists and it contains a user object with a JWT token, add it to the request headers
    config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor (optional)
apiClient.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    // Handle successful responses globally if needed.
    if (response.status == 200 || response.status == 201) {
      return response;
    }

    return Promise.reject(response);
  },
  (error) => {
    // Handle errors globally if needed.
    return Promise.reject(error);
  }
);

export default apiClient;
