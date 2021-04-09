import React, {useContext} from 'react'
import {gql, useQuery} from '@apollo/client';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import Nav from '../../components/Nav'
import SubjectFormGroup from '../../components/SubjectFormGroup'
import DeleteButton from '../../components/DeleteButton';

function SubjectForm(props){

    const subjectId=props.match.params.subjectId;
    console.log(subjectId)

    const {data, loading, error} = useQuery(FETCH_SUBJECT_QUERY, {variables:{subjectId}});
    // console.log(JSON.stringify(error, null, 2))
    if(loading) return 'Loading...';
    if(error) return `Error! ${error.message}`;

    function deletePostCallback() {
        props.history.push('/');
    }

    const {id, title, username, createdAt, flashCards, flashCardCount } = data.getSubject;

    return (
        <Container fluid>
        <Nav/>
        <Container >
        <Form>
            <h1>{title}</h1>
            <SubjectFormGroup/>
            <Button 
                variant="success"                    
            >
                + Add new
            </Button>
            <Button 
                variant="primary" 
                type="submit"
            >
                Submit
            </Button>
        </Form>
        </Container>
        </Container>
    )
    
}

const FETCH_SUBJECT_QUERY = gql`
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

export default SubjectForm