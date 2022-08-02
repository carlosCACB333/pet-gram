import { createHttpLink, ApolloClient, InMemoryCache, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URL + 'graphql',
});

const errorMidleware = onError((err) => {
  if ((err?.networkError as any)?.result?.status === 401) {
    window.location.href = '/auth/login';
    sessionStorage.removeItem('token');
  }
});
const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const apolloClient = new ApolloClient({
  link: from([errorMidleware, authLink, httpLink]),
  cache: new InMemoryCache(),
});
