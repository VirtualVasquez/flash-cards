const subjectResolvers = require('./subjects')
const userResolvers = require('./users')
const flashCardResolvers = require('./flashCard')

module.exports = {
    Subject:{
        flashCardCount(parent){
            return parent.flashCards.length
        },
        flashCardCount: (parent) => parent.flashCards.length
    },
    Query:{
        ...subjectResolvers.Query
    },
    Mutation:{
        ...userResolvers.Mutation,
        ...subjectResolvers.Mutation,
        ...flashCardResolvers.Mutation
    }
    
}