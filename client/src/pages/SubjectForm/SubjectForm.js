import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import Nav from '../../components/Nav'
import FlashCard from '../../components/FlashCard'


function SubjectForm(){
    //enter subjectID, return flashcards arr
    //Create, Read, Update, and Delete Flashcards
    const [flashCards, setFlashCards] = React.useState([{question:'', answer:''}]);

    const displayFlashCards = flashCards.map((card) =>
        <FlashCard/>
    )
    return(
        <Container fluid>
            <Nav/>
            <Container >
            <Form>
                <h1>Subject Name</h1>
                {displayFlashCards}

                <Button 
                    variant="success"
                    onClick={() => setFlashCards(flashCards => [...flashCards,{question:'', answer:''}])}
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

export default SubjectForm; 