import React from 'react';
import App from './App';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { onError } from 'apollo-link-error';

//Error link to help diagnose any errors
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = createHttpLink({
  uri: 'http://localhost:5000'
});

//This is how to get the errors to show up in console
const link = errorLink.concat(httpLink);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});

//Wrap App in ApolloProvider
export default (
  <ApolloProvider client={client}>
    <App></App>
  </ApolloProvider>
);
