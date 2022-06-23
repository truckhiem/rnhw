import {ApolloClient} from '@apollo/client';
import {InMemoryCache} from '@apollo/client/cache';

const URL = 'https://countries.trevorblades.com/';

export const client = new ApolloClient({
  uri: URL,
  cache: new InMemoryCache(),
});
