import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';

// setup endpoint
const restLink = new RestLink({
  uri : `http://localhost:8080`,
  // TODO - add typepatcher
  // typePatcher: {
  //   Shows: (
  //     response
  //   )
  // }
});

// setup client
export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
})
