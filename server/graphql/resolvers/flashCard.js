const {AuthenticationError, UserInputError} = require('apollo-server');

const checkAuth = require('../../util/check-auth');
const Subject = require('../../models/subject');

module.exports = {
        Mutation:{
            createFlashCard: async(_, {subjectId, question, answer}, context) => {
                const {username} = checkAuth(context);
                if(question.trim() === ''){
                    throw new UserInputError('Empty Question', {
                        errors:{
                            body: 'Question body must not be empty'
                        }
                    })
                }
                if(answer.trim() === ''){
                    throw new UserInputError('Empty Answer', {
                        errors:{
                            body: 'Answer body must not be empty'
                        }
                    })
                }

                const subject = await Subject.findById(subjectId);

                if(subject){
                    subject.flashCards.unshift({
                        question,
                        answer,
                        username,
                        createdAt: new Date().toISOString()
                    })
                    await subject.save();
                    return subject
                } else throw new UserInputError('Subject not found')
            },

            async deleteFlashCard(_, {subjectId, flashCardId}, context){
                const {username } = checkAuth(context);

                const subject = await Subject.findById(subjectId)
                
                if(subject){
                    const flashCardIndex = subject.flashCards.findIndex( c => c.id === flashCardId);
                    if(subject.flashCards[flashCardIndex].username === username){
                        subject.flashCards.splice(flashCardIndex, 1);
                        await subject.save();
                        return subject
                    } else{
                        throw new AuthenticationError('Action not allowed')
                    }
                } else {
                    throw new AuthenticationError('Subject not found')
                }
            }
        }
}