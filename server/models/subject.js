const {model, Schema} = require('mongoose');

const subjectSchema = new Schema({
    title: String,
    username: String,
    createdAt: String,
    flashCards: [
        {
            question: String,
            answer: String,
            createdAt: String
        }
    ],
    user:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
    // flashCardCount: Number
})

module.exports = model('Subject', subjectSchema)