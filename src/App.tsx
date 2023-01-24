import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import './App.css';
import Epochs from './view/Epochs/Epochs';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.REACT_APP_NETWORK_HTTP_URI
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Epochs />
    </ApolloProvider>
  );
}

export default App;
