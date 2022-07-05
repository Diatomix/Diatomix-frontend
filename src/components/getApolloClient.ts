import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { IState } from '../contexts/app-context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { IAuthState } from '../contexts/AuthContext';

let client: ApolloClient<any> = null;
const getApolloClient = (appData: IAuthState) => {
  if (client != null) return client;
  client = new ApolloClient({
    link: new WebSocketLink({
      uri: 'wss://graphql.k8s.diatomix.xyz/v1/graphql',
      options: {
        reconnect: true,
        connectionParams: {
          headers: {
            Authorization: appData.authToken,
          },
        },
      },
    }),
    cache: new InMemoryCache(),
  });
  return client;
};

export default getApolloClient;
