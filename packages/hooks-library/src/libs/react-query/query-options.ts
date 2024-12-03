import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";
import { getDetailData, getListData } from "./fetch-data";
import { InfiniteQueryOptions, QueryOptions } from "@types";

/**
 * Create infinite query options
 * @param params - The query parameters.
 * @param key - The query key.
 * @param endpoint - The API endpoint to fetch data from.
 * @param limit - The number of items to fetch per page.
 * @param transformer - A function to transform the response data.
 * @param initialPageParam - The initial page number to fetch.
 * @param method - The HTTP method to use for the request.
 * @returns The infinite query options.
 * @template T - The type of the query parameters.
 * @template R - The type of the response data.
 */
export const createInfiniteQueryOptions = <T, R>({
  params,
  key,
  endpoint,
  limit = 10,
  transformer,
  initialPageParam = 1,
  method = "get",
}: InfiniteQueryOptions<T>) =>
  infiniteQueryOptions({
    queryKey: [key, params],
    queryFn: ({ pageParam = initialPageParam }) =>
      getListData<T, R>({
        pageParam,
        queryKey: [key, params],
        endpoint,
        limit,
        transformer,
        method,
      }),
    initialPageParam: initialPageParam,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (!lastPage.hasNext) {
        return undefined;
      }

      return lastPageParam + 1;
    },
    getPreviousPageParam: (_firstPage, _allPages, firstPageParam) => {
      if (firstPageParam <= 1) {
        return undefined;
      }

      return firstPageParam - 1;
    },
  });

/**
 * Create query options
 * @param params - The query parameters.
 * @param key - The query key.
 * @param endpoint - The API endpoint to fetch data from.
 * @param transformer - A function to transform the response data.
 * @param method - The HTTP method to use for the request.
 * @returns The query options.
 * @template T - The type of the query parameters.
 * @template R - The type of the response data.
 */
export const createQueryOptions = <T, R>({
  params,
  key,
  endpoint,
  transformer,
  method = "get",
}: QueryOptions<T>) =>
  queryOptions({
    queryKey: [key, params],
    queryFn: () =>
      getDetailData<T, R>({
        queryKey: [key, params],
        endpoint,
        transformer,
        method,
      }),
  });
