import React, {useState } from 'react'
import {gql, useQuery, useMutation} from '@apollo/client';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import Nav from '../../components/Nav'
import DeleteButton from '../../components/DeleteButton';

function SubjectForm(props){

    const subjectId=props.match.params.subjectId;
    // console.log(subjectId)
    const [flashQuestion, setFlashQuestion] = useState('')
    const [flashAnswer, setFlashAnswer] = useState('')

    const {data, loading, error} = useQuery(FETCH_SUBJECT_QUERY, {variables:{subjectId}});
    // console.log(JSON.stringify(error, null, 2))

    const [submitFlashCard] = useMutation(SUBMIT_FLASHCARD_MUTATION, {
        update(){
            setFlashQuestion('')
            setFlashAnswer('')
        },
        variables:{
            subjectId,
            question: flashQuestion,
            answer: flashAnswer
        }
    })
    
    if(loading) return 'Loading...';
    if(error) return `Error! ${error.message}`;

    const {id, title, username, createdAt, flashCards, flashCardCount } = data.getSubject;

    function deleteSubjectCallback() {
        props.history.push('/');
    }

    return (
        <Container fluid>
        <Nav/>
        <Container >
        <Row>
            <h1>{title}</h1>
            <DeleteButton subjectId={id} callback={deleteSubjectCallback}/>
        </Row>
        <Form style={{
                border: "solid 1px black",
                padding: "1em",
                margin: "1em"}}>
            <Form.Group controlId="formQuestion">
                <Form.Label>Question<Button variant='danger'>DELETE</Button></Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Write your question here"
                    name="flashQuestion"
                    value={flashQuestion}
                    onChange={(event)=>setFlashQuestion(event.target.value)}    
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Answer</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Write your answer here"
                    name="flashAnswer"
                    value={flashAnswer}
                    onChange={(event) => setFlashAnswer(event.target.value)}
                    ></Form.Control>
            </Form.Group>
            <Button 
                variant="primary" 
                type="submit"
                // disabled={flashQuestion.trim() ==='' && flashAnswer.trim()===''}
                onClick={submitFlashCard}
            >
                Submit
            </Button>
        </Form>
            

            {flashCards.map((flashcard, index) => ( 
                <div>
                    <p>{flashcard.id}</p>
                    <p>{flashcard.question}</p>
                    <p>{flashcard.answer}</p>
                </div>
                // <Form.Group key={flashcard.id} style={{
                //     border: "solid 1px black",
                //     padding: "1em",
                //     margin: "1em"}}
                // >
                    
                //     <Form.Label>Question {index} <Button variant='danger'>DELETE</Button></Form.Label>
                //     <Form.Control type="question" placeholder="Write your question here" value={flashcard.question}/>
                //     <Form.Label>Answer {index} </Form.Label>
                //     <Form.Control type="answer" placeholder="Write your answer here" value={flashcard.answer}></Form.Control>
                //     <DeleteButton subjectId={id} flashCardId={flashcard.id}/>
                // </Form.Group>
            ))}


        </Container>
        </Container>
    )
    
}

const SUBMIT_FLASHCARD_MUTATION = gql`
    mutation($flashCardId:ID!, $question: String!, $answer: String!){
        createFlashCard(flashCardId:$flashCardId, question: $question, answer: $answer){
            id
            flashCards{
                id
                question
                answer
            }
            flashCardCount
        }
    }
`

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