import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/esm/Dropdown';

function Subject(props){

    return(
        <Col sm="4" md="3">
            <Card className="text-center">
                <Card.Header>
                    <DropdownButton id="dropdown-basic-button" variant="secondary" title="" style={{float:"right"}}>
                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                    </DropdownButton>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Button variant="primary">Start Quiz</Button>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default Subject; 