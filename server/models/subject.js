const {model, Schema} = require('mongoose');

const subjectSchema = new Schema({
    title: String,
    username: String,
    createdAt: String,
    flashCards: [
        {
            question: String,
            answer: String,
            username: String,
            createdAt: String
        }
    ],
    user:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = model('Subject', subjectSchema)