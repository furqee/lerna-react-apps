import {
  InfiniteData,
  UseInfiniteQueryResult,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { createInfiniteQueryOptions } from "@libs/react-query/query-options";
import { InfiniteQueryOptions, IListApiResponse } from "@types";

export default function useInfiniteFetch<T, R>(
  options: InfiniteQueryOptions<T>,
): UseInfiniteQueryResult<InfiniteData<IListApiResponse<R>, unknown>, Error> {
  return useInfiniteQuery(createInfiniteQueryOptions(options));
}
