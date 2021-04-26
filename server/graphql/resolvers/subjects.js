const {AuthenticationError} = require('apollo-server');

const Subject = require('../../models/subject');
const checkAuth = require('../../util/check-auth');

module.exports = {
    Query:{
        async getSubjects(){
            try{
                const subjects = await Subject.find().sort({createdAt: -1})
                return subjects
            } catch(err) {
                throw new Error(err)
            }
        },
        async getSubject(_, {subjectId}){
            try{
                const subject = await Subject.findById(subjectId);
                if(subject){
                    return subject;
                } else{
                    throw new Error('Subject not found');
                }
            } catch (err){ 
                throw new Error(err)
            }
        },
        async getUserSubjects(_, {username}){
            try{
                const subjects = await Subject.find(username).sort({createdAt: -1})
                return subjects
            }catch(err){
                throw new Error(err)
            }
        }
    },
    // need to review context and how it's used/structured
    Mutation:{
        async createSubject(_, {title}, context){
            const user = checkAuth(context)
            console.log(user)
            
            if(title.trim() ===''){
                throw new Error('Post body must not be empty');
            }

            const newSubject = new Subject({
                title,
                user: user.id,
                username: user.username,
                createdAt: new Date().toISOString()
            })

            const subject = await newSubject.save()

            // context.pubsub.publish('NEW SUBJECT', {
            //     newSubject: subject
            // })

            return subject
        },
        async deleteSubject(_,{subjectId}, context){
            
            const user = checkAuth(context);
            try{
                const subject = await Subject.findById(subjectId);
                if(user.username === subject.username){
                    await subject.deleteOne();
                    return 'Subject deleted successfully';
                } else{
                    throw new AuthenticationError('Action not allowed');
                }
            } catch(err){
                throw new Error(err);
            }
        }
    }
}