const subjectResolvers = require('./subjects')
const userResolvers = require('./users')
const flashCardResolvers = require('./flashCard')

module.exports = {
    Query:{
        ...subjectResolvers.Query
    },
    Mutation:{
        ...userResolvers.Mutation,
        ...subjectResolvers.Mutation,
        ...flashCardResolvers.Muation
    }
    
}