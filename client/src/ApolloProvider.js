import React from 'react';
import App from './App'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';


const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
})


export default(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)