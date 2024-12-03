import { AxiosRequestConfig, AxiosResponse } from "axios";
import { axiosClient } from "./client";
import { RequestParams } from "@types";

/**
 * Handles successful responses from Axios requests.
 * @param response - The Axios response object.
 * @returns The response object.
 */
const handleSuccess = (response: AxiosResponse) => response;

/**
 * Handles errors from Axios requests.
 * @param error - The error object from Axios.
 * @returns A rejected promise with the error object.
 */
const handleError = (error: any) =>
  Promise.reject(error instanceof Error ? error : new Error(error));

/**
 * Sends an HTTP request using Axios with the specified parameters.
 * @param params - The parameters for the request including URL, method, and optional body.
 * @returns The response data from the request.
 */
export default async function request<T>({
  url,
  method = "get",
  body,
  unauthorizedRedirect = true,
  ...rest
}: RequestParams) {
  axiosClient.interceptors.response.use(handleSuccess, handleError);

  try {
    const config: AxiosRequestConfig = {
      url,
      method,
      data: body,
      ...rest,
    };
    const response: AxiosResponse<T> = await axiosClient.request(config);

    return response;
  } catch (err: any) {
    if (unauthorizedRedirect && err.response?.status === 401) {
      // Handle unauthorized error, e.g., redirect to login
      // This might require Next.js specific logic, such as using Router.push('/login')
    }

    return Promise.reject(err instanceof Error ? err : new Error(err));
  }
}
