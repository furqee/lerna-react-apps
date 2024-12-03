import axios from "axios";
import { Constants } from "@furqe/config-library";

const axiosClient = axios.create();

const authToken = window.localStorage.getItem(Constants.authTokenKey); // Get the token from the local storage

/**
 * Set axios interceptors to add the token and storeId to the request headers
 * @param value - The token value
 * @returns void
 */
axiosClient.interceptors.request.use(
  (config: any) => {
    if (authToken) {
      config.headers["Authorization"] = `Bearer ${authToken}`;
    }

    return config;
  },
  (error: any) => {
    return Promise.reject(new Error(error));
  },
);

/**
 * Set the auth token in the local storage
 * @param value - The token value
 * @returns void
 */
const setAuthToken = (value: string) => {
  window.localStorage.setItem(Constants.authTokenKey, value); // Set the token in the local storage
};

export { axiosClient, setAuthToken };
