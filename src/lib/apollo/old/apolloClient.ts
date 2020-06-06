import { NextPageContext, GetServerSidePropsContext } from "next";
import { ApolloClient } from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import fetch from "isomorphic-unfetch";
import cookieParser from "cookie";
import { FAUNA_SECRET_COOKIE } from "utils/fauna-auth";

export const getApolloClientFromContext = (
  context: GetServerSidePropsContext
) => {
  const cookies = cookieParser.parse(context.req.headers.cookie ?? "");
  return createApolloClient(cookies[FAUNA_SECRET_COOKIE]);
};

export const createApolloClient = (
  faunaSecret: string,
  initialState?: NormalizedCacheObject,
  ctx?: NextPageContext | null
) => {
  const fetchOptions = { agent: null };

  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_FAUNADB_URL,
    credentials: "same-origin",
    fetch,
    fetchOptions,
  });

  const authLink = setContext((_request, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${faunaSecret}`,
      },
    };
  });

  return new ApolloClient({
    connectToDevTools: Boolean(ctx),
    ssrMode: Boolean(ctx),
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState as NormalizedCacheObject),
  });
};
