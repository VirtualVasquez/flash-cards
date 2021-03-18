import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import Nav from '../../components/Nav'
import FlashCard from '../../components/FlashCard'

function SubjectForm(){
    //enter subjectID, return flashcards arr
    //Create, Read, Update, and Delete Flashcards

    return(
        <div>
            <Nav/>
            <Container >
            <Form>
                <h1>Subject Name</h1>
                
                <FlashCard/>

                <Button variant="success">
                    + Add new
                </Button>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Container>

        </div>
    )
}

export default SubjectForm; 