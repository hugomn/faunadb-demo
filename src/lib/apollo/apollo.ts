import { useMemo } from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import cookieParser from "cookie";
import { parseCookies } from "nookies";
import { FAUNA_SECRET_COOKIE } from "utils/fauna-auth";
import { GetServerSidePropsContext } from "next";

let apolloClient: ApolloClient<NormalizedCacheObject>;

const createApolloClient = (token?: string) => {
  const cookies = parseCookies();
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: process.env.FAUNADB_URL,
      credentials: "same-origin",
      headers: {
        authorization: `Bearer ${cookies[FAUNA_SECRET_COOKIE] || token}`,
      },
    }),
    cache: new InMemoryCache(),
  });
};

export const initializeApollo = (
  initialState?: NormalizedCacheObject,
  token?: string
) => {
  const _apolloClient = apolloClient ?? createApolloClient(token);
  if (initialState) {
    _apolloClient.cache.restore(initialState as NormalizedCacheObject);
  }
  if (typeof window === "undefined") return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
};

export const useApollo = (initialState: NormalizedCacheObject) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};

export const getApolloClientFromContext = (
  context: GetServerSidePropsContext
) => {
  const cookies = cookieParser.parse(context.req.headers.cookie ?? "");
  return createApolloClient(cookies[FAUNA_SECRET_COOKIE]);
};
