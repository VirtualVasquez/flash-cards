import React from 'react'
import Form from 'react-bootstrap/form'
import Button from 'react-bootstrap/Button'

function SubjectFormGroup(){
    //enter subjectID, return flashcards arr
    //Create, Read, Update, and Delete Flashcards

    return(
        <Form.Group style={{
            border: "solid 1px black",
            padding: "1em",
            margin: "1em"}}
        >
            <Form.Label>Question # <Button variant='danger'>DELETE</Button></Form.Label>
            <Form.Control type="question" placeholder="Write your question here"/>
            <Form.Label>Answer #</Form.Label>
            <Form.Control type="answer" placeholder="Write your answer here"></Form.Control>
        </Form.Group>
    )
}

export default SubjectFormGroup; 