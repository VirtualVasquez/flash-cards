import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Subject from '../../components/Subject'
import LoginForm from '../../components/LoginForm'
import Nav from '../../components/Nav'

import './Home.css';

function Home(){

    return(
        <div>
            <Nav/>

            <Container fluid>

                <Row  style={{margin:"20px"}}>
                    <Subject />
                </Row>
                <Row className="justify-content-center">
                    <Button  variant="success" 
                    style={{
                        float:"right", 
                        fontSize:"2em",
                        position:"absolute",
                        bottom:"0",
                        margin: "2em"}}>+ Create New Subject</Button>
                </Row>
            </Container>
        </div>
    )
}

export default Home; 