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

    const {data, error} = useQuery(FETCH_SUBJECT_QUERY, {variables:{subjectId}});
    const newData = data.getSubject;
    // console.log(JSON.stringify(error, null, 2))

    function deletePostCallback() {
        props.history.push('/');
    }

    let subjectMarkup;
    if(!newData){
        subjectMarkup = <p>Loading post...</p>
    }else{
        const{
            createdAt,
            flashCardCount,
            flashCards,
            id,
            title,
            username
        } = newData
    }
        subjectMarkup=(
            <Container fluid>
            <Nav/>
            <Container >
            <Form>
                <h1>{newData.title}</h1>
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

    return subjectMarkup
    
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