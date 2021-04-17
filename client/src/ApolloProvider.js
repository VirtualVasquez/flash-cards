import React from 'react';
import App from './App'
import { ApolloProvider, ApolloClient, InMemoryCache ,createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import 'bootstrap/dist/css/bootstrap.min.css';

const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
})

const authLink = setContext(() => {
    const token = localStorage.getItem('jwtToken');
    return {
        headers: {
            Authorization: token ? `Bearer ${token}` : ''
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})




export default(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)