import { request } from "@furqe/common-library";
import {
  PaginatedApiQueryParams,
  BaseApiQueryParams,
  IDetailApiResponse,
  IListApiResponse,
} from "@types";

/**
 * Fetches paginated data from an API endpoint.
 * @param pageParam - The page number to fetch.
 * @param queryKey - The query key for the request.
 * @param method - The HTTP method to use for the request.
 * @param endpoint - The API endpoint to fetch data from.
 * @param limit - The number of items to fetch per page.
 * @param transformer - A function to transform the response data.
 * @returns The response object.
 * @template T - The type of the query key.
 * @template R - The type of the response data.
 */
export const getListData = async <T, R>({
  pageParam,
  queryKey,
  method,
  endpoint,
  limit,
  transformer,
}: PaginatedApiQueryParams<T>): Promise<IListApiResponse<R>> => {
  const [_, params] = queryKey;

  // Initialize URL
  let url = `${endpoint}?page=${encodeURIComponent(String(pageParam))}&limit=${encodeURIComponent(String(limit))}`;

  // Add dynamic query parameters if `params` is an object
  if (params && typeof params === "object" && !Array.isArray(params)) {
    const queryString = Object.entries(params)
      .filter(([_, value]) => value !== undefined && value !== null) // Filter out undefined or null values
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`,
      )
      .join("&");

    // Append query string if it's not empty
    if (queryString) {
      url += `&${queryString}`;
    }
  }

  const { data } = await request<IListApiResponse<T>>({
    url,
    method: method,
  });

  // Transform data if transformation function is provided
  return {
    ...data,
    content: transformer ? transformer(data.content) : data.content,
  };
};

/**
 * Fetches detail data from an API endpoint.
 * @param queryKey - The query key for the request.
 * @param endpoint - The API endpoint to fetch data from.
 * @param transformer - A function to transform the response data.
 * @param method - The HTTP method to use for the request.
 * @returns The response object.
 * @template T - The type of the query key.
 * @template R - The type of the response data.
 */
export const getDetailData = async <T, R>({
  queryKey,
  endpoint,
  transformer,
  method,
}: BaseApiQueryParams<T>): Promise<IDetailApiResponse<R>> => {
  const [_, params] = queryKey;

  // Initialize URL
  let url = `${endpoint}?`;

  // Add dynamic query parameters if `params` is an object
  if (params && typeof params === "object" && !Array.isArray(params)) {
    const queryString = Object.entries(params)
      .filter(([_, value]) => value !== undefined && value !== null) // Filter out undefined or null values
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`,
      )
      .join("&");

    // Append query string if not empty
    if (queryString) {
      url += queryString;
    }
  }

  const { data } = await request<IDetailApiResponse<T>>({
    url,
    method,
  });

  return { data: transformer ? transformer(data) : data };
};
