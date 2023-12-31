import axios, { AxiosResponse } from "axios";
import { getCookie } from "./CookieHandler";

// Create an Axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(
  async (config) => {
    let token;

    token = getCookie();

    // If a session exists and it contains a user object with a JWT token, add it to the request headers
    config.headers["Authorization"] = `Bearer ${token?.value}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor (optional)
api.interceptors.response.use(
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

export default api;
