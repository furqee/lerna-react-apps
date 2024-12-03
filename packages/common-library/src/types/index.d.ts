export interface RequestParams {
  url: string;
  method?:
    | "get"
    | "GET"
    | "post"
    | "POST"
    | "put"
    | "PUT"
    | "delete"
    | "DELETE"
    | "patch"
    | "PATCH"
    | "head"
    | "HEAD"
    | "options"
    | "OPTIONS";
  body?: any;
  unauthorizedRedirect?: boolean;
  rest?: any;
}
