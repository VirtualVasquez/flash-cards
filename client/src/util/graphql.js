import gql from 'graphql-tag'

export const FETCH_SUBJECTS_QUERY = gql`
{
    getSubjects{
        title username id
    }
}
`

export const FETCH_SUBJECT_QUERY = gql`
query($subjectId: ID!){
    getSubject(subjectId: $subjectId){
        id
        title
        createdAt
        username
        flashCards{
            id
            question
            answer
        }
        flashCardCount
    }
}
`

export const FETCH_USER_SUBJECTS_QUERY = gql`
query($subjectUsername: String!){
    getUserSubjects(subjectUsername: $subjectUsername){
        id
        title
        createdAt
        username
        flashCards{
            id
            question
            answer
        }
        flashCardCount
    }
}
`