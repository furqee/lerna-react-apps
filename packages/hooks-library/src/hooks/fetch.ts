import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { createQueryOptions } from "@libs/react-query/query-options";
import { QueryOptions, IDetailApiResponse } from "@types";

export default function useFetch<T, R>(
  options: QueryOptions<T>,
): UseQueryResult<IDetailApiResponse<R>, Error> {
  return useQuery(createQueryOptions(options));
}
