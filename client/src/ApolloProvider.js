import React from 'react';
import App from './App'
import ApolloClient from 'apollo-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import { createHttpLink} from 'apollo-link-http'
import {ApolloProvider} from '@apollo/react-hooks'
import 'bootstrap/dist/css/bootstrap.min.css';


const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

export default(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)