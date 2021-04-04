import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import {PencilSquare, Trash} from 'react-bootstrap-icons'

function Subject({
    subject:{title, createdAt, id, username, flashCardCount}
}){

    return(
        <Col sm="4" md="3">
            <Card className="text-center">
                <Card.Header>
                    <Button 
                        variant="secondary"
                        as={Link}
                        to={`/subjects/${id}`}
                    >
                        <PencilSquare/>
                    </Button>
                    <Button variant="danger">
                        <Trash/>
                    </Button>

                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Button variant="primary">Start Quiz</Button>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default Subject; 