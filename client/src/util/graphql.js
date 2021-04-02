import gql from 'graphql-tag'

export const FETCH_SUBJECTS_QUERY = gql`
{
    getSubjects{
        title username id
    }
}
`