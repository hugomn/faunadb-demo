import { NextPageContext } from "next";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import fetch from "isomorphic-unfetch";

export const createApolloClient = (initialState?, ctx?: NextPageContext) => {
  const fetchOptions = { agent: null };

  const httpLink = new HttpLink({
    uri: process.env.FAUNADB_URL,
    credentials: "same-origin",
    fetch,
    fetchOptions,
  });

  const authLink = setContext((_request, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.FAUNADB_SECRET_KEY}`,
      },
    };
  });

  return new ApolloClient({
    connectToDevTools: Boolean(ctx),
    ssrMode: Boolean(ctx),
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState),
  });
};
