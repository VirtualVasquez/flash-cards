import React, {useState } from 'react'
import {gql, useQuery, useMutation} from '@apollo/client';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

import Nav from '../../components/Nav'
import DeleteButton from '../../components/DeleteButton';
import {FETCH_SUBJECT_QUERY} from '../../util/graphql';


function SubjectForm(props){
    const subjectId=props.match.params.subjectId;
    // console.log(subjectId)
    const [flashQuestion, setFlashQuestion] = useState('')
    const [flashAnswer, setFlashAnswer] = useState('')

    const {data, loading, error} = useQuery(FETCH_SUBJECT_QUERY, {variables:{subjectId}});
    // console.log(JSON.stringify(error, null, 2))

    const [submitFlashCard, {loading:mutationLoading, error:mutationError}] = useMutation(SUBMIT_FLASHCARD_MUTATION, {
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
        <Form 
            onSubmit={e => {
                e.preventDefault();
                submitFlashCard();
            }}
            style={{
                border: "solid 1px black",
                padding: "1em",
                margin: "1em"}}>
            <p>Add FlashCard</p>
            <Form.Group controlId="formQuestion">
            <Form.Label>Question</Form.Label>
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
                disabled={!flashQuestion.trim() && !flashAnswer.trim()}
            >
                Submit
            </Button>
        </Form>
        {mutationLoading && <p>Loading...</p>}
        {mutationError && console.log(JSON.stringify(mutationError, null, 2))}

            
        <Container>
        {flashCards.map((flashcard, index) => (
                <Card key={flashcard.id} style={{marginBottom:"10px"}}>
                    {/* <Card.Header>Question #{index+1}</Card.Header> */}
                    <ListGroup variant="flush">
                        <ListGroup.Item><strong>Question #{index+1}</strong> <DeleteButton subjectId={id} flashCardId={flashcard.id}/></ListGroup.Item>
                        <ListGroup.Item>{flashcard.question}</ListGroup.Item>
                        <ListGroup.Item><strong>Answer</strong></ListGroup.Item>
                        <ListGroup.Item>{flashcard.answer}</ListGroup.Item>
                    </ListGroup>
                </Card>
            ))}
        </Container>



        </Container>
        </Container>
    )
    
}

const SUBMIT_FLASHCARD_MUTATION = gql`
    mutation($subjectId:ID!, $question: String!, $answer: String!){
        createFlashCard(subjectId:$subjectId, question: $question, answer: $answer){
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

export default SubjectForm