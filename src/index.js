import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import FiltersProvider from './context';
const client = new ApolloClient({
  uri: 'http://localhost:2021/graphql',
  cache: new InMemoryCache(),

  // onError: ({ networkError, graphQLErrors }) => {
  //   console.log('graphQLErrors', graphQLErrors);
  //   console.log('networkError', networkError);
  // },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <FiltersProvider>
        <App />
      </FiltersProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
