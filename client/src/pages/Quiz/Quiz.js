import React, {useState} from 'react'
import {useQuery, useMutation} from '@apollo/client';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Nav from '../../components/Nav';
import {Link} from 'react-router-dom'
import {FETCH_SUBJECT_QUERY} from '../../util/graphql';

import './Quiz.css'

function Quiz(props){
    const subjectId=props.match.params.subjectId;
    const [index, setIndex] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);
    const [showA, setShowA] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const {data, loading, error} = useQuery(FETCH_SUBJECT_QUERY, {variables:{subjectId}});

    if(loading) return 'Loading...';

    if(error) return `Error! ${error.message}`;

    const {id, title, username, createdAt, flashCards, flashCardCount } = data.getSubject;

    function nextCard(props){
        props == 1 ? setCorrect(correct + 1) : setWrong(wrong + 1);
        setShowA(false);

        if(flashCardCount == index+1){
            return setShowResult(true)
        }
        setIndex(index + 1)
    }

    function reset(){
        setIndex(0);
        setCorrect(0)
        setWrong(0)
        setShowA(false)
        setShowResult(false)
    }

    return(
        <Container fluid className="wrapper">
            <Nav/>
            {!showResult ? (            
                <Jumbotron className="text-center" id="quiz-card">
                <h1>{flashCards[index].question}</h1>
                <Row className="text-center" id="quiz-button-panel">
                    {!showA ? (
                        <div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Button variant="primary" onClick={()=>setShowA(true)}>Reveal Answer</Button>
                        </div>
                        ) : (
                            <div>
                                <h2><strong>{flashCards[index].answer}</strong></h2>
                                <br></br>
                                <br></br>
                                <div>
                                <p>Did you get it right?</p>
                                <Button variant="success" onClick={() => nextCard(1)}>Yes</Button>
                                <Button variant="danger" onClick={() => nextCard(0)}>No</Button>
                                </div>
                            </div>
                            )
                    }
                </Row>
                </Jumbotron> ) : (

                <Jumbotron className="text-center" id="results">
                    <h1>You got {correct} out of {flashCardCount}.</h1>
                    <Row className="text-center">
                        <div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Button onClick={() => reset()}>Try again</Button>
                            <Button name='home' as={Link} to='/'>Go Home</Button>
                        </div>
                    </Row>

                </Jumbotron>
            )}
        
        </Container>



    )
}

export default Quiz; 