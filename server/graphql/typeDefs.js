const {gql} = require('apollo-server')

const typeDefs = gql`
    "A given collection of flash cards"
    type Subject{
        id: ID!
        title: String!
        "this acts as the list of questions and answers"
        flashCards: [FlashCard]
        flashCardCount:  Int
    }
    "One individual flash card, with one question and one answer"
    type FlashCard{
        id:ID!
        question: String!
        answer: String!
    }

    # "Users that log in and out"
    type User{
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
    }
    # different kind of "type", given as an input to a resolver for it to return something
    input RegisterInput{
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    type Query{
        getSubjects: [Subject]
        getSubject(postID: ID!): Subject
    }
    type Mutation{
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
        createSubject(title: String!): Subject!
        deleteSubject(subjectId:ID!):String!
        createFlashCard(subjectId:String!, question:String!, answer: String!): FlashCard!
    }
`
module.exports = typeDefs;