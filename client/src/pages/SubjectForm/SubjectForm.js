import React, {useContext} from 'react'
import {gql, useQuery} from '@apollo/client';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import{AuthContext} from '../../context/auth'

import Nav from '../../components/Nav'
import SubjectFormGroup from '../../components/SubjectFormGroup'
import DeleteButton from '../../components/DeleteButton';

function SubjectForm(props){

    const subjectId=props.match.params.subjectId;
    // const { user } = useContext(AuthContext)
    console.log(subjectId)

    // const {
    //     data: {getSubject}
    // } = useQuery(FETCH_SUBJECT_QUERY, { 
    //     variables: { 
    //         subjectId
    //     }
    // })

    const {data, error} = useQuery(FETCH_SUBJECT_QUERY);

    console.log(data);
    console.log(JSON.stringify(error, null, 2))

    function deleteDeleteCallback() {
        props.history.push('/');
      }

    let subjectMarkup;

    // if(!getSubject){
    //     subjectMarkup = <p>Loading post...</p>
    // } else {
    //     const {
    //         id, 
    //         title, 
    //         createdAt, 
    //         username, 
    //         flashCards, 
    //         flashCardCount
    //     } = getSubject

        subjectMarkup=(
            <Container fluid>
            <Nav/>
            <Container >
            <Form>
                <h1>Hello</h1>
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
    // }

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

export default SubjectForm; 