import React, {useContext} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import {PencilSquare, Trash} from 'react-bootstrap-icons'

import {AuthContext} from '../context/auth'
import DeleteButton from './DeleteButton';

function Subject({
    subject:{title, createdAt, id, username, flashCardCount}
}){
    const {user} = useContext(AuthContext);

    return(
        <Col sm="4" md="3">
            <Card className="text-center">
                <Card.Header>
                    <Button 
                        variant="secondary"
                        as={Link}
                        to={`/subjects/${id}`}
                        id={id}
                    >
                        <PencilSquare/>
                    </Button>
                    <DeleteButton subjectId={id}/>

                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Button 
                        variant="primary"
                        as={Link}
                        to={`/quiz/${id}`}
                        id={id}
                        >Start Quiz</Button>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default Subject; 