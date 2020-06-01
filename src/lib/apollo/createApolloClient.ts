import { NextPageContext } from "next";
import { ApolloClient } from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import fetch from "isomorphic-unfetch";
import cookieParser from "cookie";
import { FAUNA_SECRET_COOKIE } from "utils/fauna-auth";

export const createApolloClient = (
  cookie?: string,
  initialState?: NormalizedCacheObject,
  ctx?: NextPageContext | null
) => {
  const fetchOptions = { agent: null };

  const httpLink = new HttpLink({
    uri: process.env.FAUNADB_URL,
    credentials: "same-origin",
    fetch,
    fetchOptions,
  });

  const cookies = cookieParser.parse(cookie ?? "");
  const authLink = setContext((_request, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${cookies[FAUNA_SECRET_COOKIE]}`,
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
