import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Subject from './Subject';
import Nav from './Nav';

function Dashboard(){
    return(
        <Container fluid>
            <Nav/>
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
                        margin: "2em"}}>+ Create New Subject
                </Button>
            </Row>
        </Container>
    )
}
    
export default Dashboard; 