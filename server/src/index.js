const {ApolloServer, MockList} = require('apollo-server');
const mongoose = require('mongoose'); //let's us interact with mongoDB

const typeDefs = require('../graphql/typeDefs');
const resolvers = require('../graphql/resolvers')
const {MONGODB} = require('../config.js');


const server = new ApolloServer({
    typeDefs,
    resolvers
    // mocks
})

//need to connect to DB BEFORE starting server
mongoose.connect(MONGODB, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log(`
            MongoDB connected
            Server is running!
            Listening on port 4000
            Query at https://studio.apollographql.com/dev
        `)
        return server.listen({port:4000});
    })