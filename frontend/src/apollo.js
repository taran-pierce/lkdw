import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";


const envTest = process.env.NEXT_PUBLIC_GRAPHQL_URL;

const link = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  fetchOptions: {
    mode: 'cors'
  }
});

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  cache: new InMemoryCache(),
  credentials: 'include',
  link: link,
});

export default client;
