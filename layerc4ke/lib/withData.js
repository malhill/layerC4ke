import { ApolloClient, ApolloLink, HttpLink, createHttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/link-error';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { createUploadLink } from 'apollo-upload-client';
import withApollo from 'next-with-apollo';
import { endpoint, prodEndpoint } from '../config/config';
import { setContext } from 'apollo-link-context';
// import paginationField from './paginationField';

// Will clean up commented code in the future... am messing with config options

const httpLink = createHttpLink({
  uri: '/api/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

function createClient({ headers, initialState }) {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    // ApolloLink.from([
    //   onError(({ graphQLErrors, networkError }) => {
    //     if (graphQLErrors)
    //       graphQLErrors.forEach(({ message, locations, path }) =>
    //         console.log(
    //           `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
    //         )
    //       );
    //     if (networkError)
    //       console.log(
    //         `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
    //       );
    //   }),
    //   // this uses apollo-link-http under the hood, so all the options here come from that package
    //   createUploadLink({
    //     uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
    //     fetchOptions: {
    //       credentials: 'include',
    //     },
    //     // pass the headers along from this request. This enables SSR with logged in state
    //     headers,
    //   }),
    // ]),
    cache: new InMemoryCache()
    // cache: new InMemoryCache({
    //   typePolicies: {
    //     Query: {
    //       fields: {
    //         // TODO: We will add this together!
    //         allProducts: paginationField(),
    //       },
    //     },
    //   },
    // }).restore(initialState || {}),
  });
}

export default withApollo(createClient, { getDataFromTree });
