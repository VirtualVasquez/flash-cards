import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Quiz.css'

function Quiz(){

    return(
        <Container id="quiz-container">
            <Jumbotron className="text-center" id="quiz-card">
                <h1>This is your question?</h1>
                <p>This is where you answer should go</p>
                <Row  className="text-center" id="quiz-button-panel" style={{justifyContent:"center"}}>
                    <Button variant="primary">Reveal Answer</Button>
                    {/* <Col md="12">Did you get it right?</Col>
                    <Button variant="danger">X</Button>
                    <Button variant="success">V</Button> */}
                </Row>
            </Jumbotron>           
        </Container>


    )
}

export default Quiz; 