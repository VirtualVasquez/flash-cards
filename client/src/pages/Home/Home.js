import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import RegisterForm from '../../components/RegisterForm'
import './Home.css';

function Home(){
    const [modalShow, setModalShow] = React.useState(false);    

    return(
        <Jumbotron>
            <h1>Flash Cards</h1>
            <Form>                
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={{span:1, offset:3}}>Email</Form.Label>
                    <Col sm={5}>
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={{span:1, offset:3}}>Password</Form.Label>
                    <Col sm={5}>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{span: 3, offset:3}}>
                        <Button className="login-form-button" type="submit" variant="primary">Sign in</Button>
                    </Col>
                    <Col sm={3}>
                        <Button className="login-form-button" variant="success" onClick={() => setModalShow(true)}>Create Account</Button>

                        <RegisterForm 
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Col>
                </Form.Group>

            </Form>
        </Jumbotron>
        // </Container>
    )
}

export default Home; 