// import React, {useContext} from 'react';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import {PencilSquare} from 'react-bootstrap-icons'

// import {AuthContext} from '../context/auth'
import DeleteButton from  './DeleteButton';
import './SubjectCard.css';


function Subject({
    subject:{title, createdAt, id, username, flashCardCount}
}){
    // const {user} = useContext(AuthContext);

    return(
        <Col sm="4" md="3">
            <Card className="text-center subject-card">
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
                    {!flashCardCount ? "No flashcards yet!" : <Button 
                        variant="primary"
                        as={Link}
                        to={`/quiz/${id}`}
                        id={id}
                        disabled
                        >Start Quiz</Button>}
                </Card.Body>
            </Card>
        </Col>

    )
}

export default Subject; 