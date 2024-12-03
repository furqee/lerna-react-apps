export interface BaseApiQueryParams<T> {
  queryKey: [string, T];
  endpoint: string;
  method?: "get" | "post" | "put" | "delete" | "patch";
  transformer?: (data: any) => any;
}

export interface PaginatedApiQueryParams<T> extends BaseApiQueryParams<T> {
  pageParam?: number;
  limit?: number;
}

export interface InfiniteQueryOptions<T>
  extends Omit<BaseApiQueryParams<T>, "queryKey"> {
  key: string;
  params: T;
  limit?: number;
  initialPageParam?: number;
}

export interface QueryOptions<T>
  extends Omit<BaseApiQueryParams<T>, "queryKey"> {
  key: string;
  params: T;
}

export interface IListApiResponse<T> {
  totalPages: number;
  currentPage: number;
  hasNext: boolean;
  content: T[];
  skippedRecords: number;
  totalRecords: number;
}

export interface IDetailApiResponse<T> {
  data: T;
}
