const {gql} = require('apollo-server')

const typeDefs = gql`
    "A given collection of flash cards"
    type Subject{
        id: ID!
        title: String!
        createdAt: String!
        username: String!
        "this acts as the list of questions and answers"
        flashCards: [FlashCard]!
        flashCardCount:  Int!
    }
    "One individual flash card, with one question and one answer"
    type FlashCard{
        id:ID!
        question: String!
        answer: String!
        createdAt:String!
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
        getUserSubjects(username: String!): [Subject]
        getSubject(subjectId: ID!): Subject
    }
    type Mutation{
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
        createSubject(title: String!): Subject!
        deleteSubject(subjectId:ID!):String!
        createFlashCard(subjectId:ID!, question:String!, answer: String!): Subject!
        deleteFlashCard(subjectId: ID!, flashCardId: ID!): Subject!
    }
`
module.exports = typeDefs;