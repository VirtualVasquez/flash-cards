const subjectResolvers = require('./subjects');
const userResolvers = require('./users');

module.exports = {
    Query:{
        ...subjectResolvers.Query
    },
    
}