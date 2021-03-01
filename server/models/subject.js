const {model, Schema} = require('mongoose');

const subjectSchema = new Schema({
    title: String,
    flashCards: [
        {
            question: String,
            answer: String,
        }
    ],
    flashCardCount: Number
})

module.exports = model('Subject', subjectSchema)