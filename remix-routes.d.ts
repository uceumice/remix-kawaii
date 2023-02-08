
declare module "@remix-kawaii/routes" {

type IsAny<T> = (
  unknown extends T
    ? [keyof T] extends [never] ? false : true
    : false
);
type URLSearchParamsInit = string | string[][] | Record<string, string> | URLSearchParams;
type Query<T> = IsAny<T> extends true ? [URLSearchParamsInit?] : [T];
      

export declare function $path(
  route: "/",
  ...query: Query<import('../app/root').SearchParams>
): string;
export declare function $path(
  route: "/api/hello",
  ...query: Query<import('../app/routes\api\hello').SearchParams>
): string;



}

