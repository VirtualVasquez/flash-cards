import React, {useState} from 'react'
import {useQuery, useMutation} from '@apollo/client';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Nav from '../../components/Nav';
import {FETCH_SUBJECT_QUERY} from '../../util/graphql';

import './Quiz.css'

function Quiz(props){
    const subjectId=props.match.params.subjectId;
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);
    const [showA, setShowA] = useState(false);

    const {data, loading, error} = useQuery(FETCH_SUBJECT_QUERY, {variables:{subjectId}});
    const {id, title, username, createdAt, flashCards, flashCardCount } = data.getSubject;

    function nextCard(props){
        props == 1 ? setCorrect(correct + 1) : setWrong(wrong + 1);
    }

    //display one question at time
        //reveal answer on button click
            //confirm if guess (in thought) is right/wrong
            //move onto the next question
    //Display end page with right/wrong questions
    //two links
        //redo
        //go home

    return(
        <Container fluid>
            <Nav/>
            <Container id="quiz-container">
            <Jumbotron className="text-center" id="quiz-card">
                <Row><p>Correct: {correct}</p></Row>
                <Row><p>Wrong: {wrong}</p></Row>
                <h1>{flashCards[3].question}</h1>
                <Row  className="text-center" id="quiz-button-panel" style={{justifyContent:"center"}}>
                    {!showA ? (
                        <Button variant="primary" onClick={()=>setShowA(true)}>Reveal Answer</Button>
                        ) : (
                            <div>
                                <p><strong>{flashCards[3].answer}</strong></p>
                                <p>Did you get it right?</p>
                                <Button onClick={() => nextCard(1)}>Yes</Button>
                                <Button onClick={() => nextCard(0)} variant="secondary">No</Button>
                            </div>
                            )
                    }
                </Row>
            </Jumbotron>           
            </Container>
        </Container>



    )
}

export default Quiz; 