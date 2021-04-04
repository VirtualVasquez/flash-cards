import React, {useState, useContext} from 'react'
import gql from 'graphql-tag';
import {useQuery} from '@apollo/client';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


import{AuthContext} from '../../context/auth'
import {useForm} from '../../util/hooks'

import Nav from '../../components/Nav'
import SubjectFormGroup from '../../components/SubjectFormGroup'

function SubjectForm(props){

    const subjectId=props.match.params.subjectId;
    const { user } = useContext(AuthContext)
    console.log(subjectId)

    const {data:{getSubject}} = useQuery(FETCH_SUBJECT_QUERY, { 
        variables: { 
            subjectId
        }
    })

    let subjectMarkup;
    if(!getSubject){
        subjectMarkup = <p>Loading post...</p>
    } else {
        const {id, title, createdAt, username, flashCards, flashCardCount} = getSubject

        subjectMarkup=(
            <Container fluid>
            <Nav/>
            <Container >
            <Form>
                <h1>{title}</h1>
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

    return(
        subjectMarkup
    )
}

const FETCH_SUBJECT_QUERY = gql`
    query($subjectId: ID!){
        getSubject(subjectId:$subjectId){
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


    // const [subjectFormGroup, setSubjectFormGroup] = React.useState([{question:'', answer:''}]);

    // const displaySubjectFormGroups = subjectFormGroup.map((card) =>
    //     <SubjectFormGroup/>
    //                {displaySubjectFormGroups}

    // <Button 
    //                 variant="success"
    //                 onClick={() => setSubjectFormGroup(subjectFormGroup => [...subjectFormGroup,{question:'', answer:''}])}
    //             ></Button>
