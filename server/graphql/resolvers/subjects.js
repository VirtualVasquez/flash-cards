const Subject = require('../../models/subject')

module.exports = {
    Query:{
        async getSubjects(){
            try{
                const subjects = await Subject.find()
                return subjects
            } catch(err) {
                throw new Error(err)
            }
        }
    }
}