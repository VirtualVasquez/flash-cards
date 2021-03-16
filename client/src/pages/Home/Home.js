import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
// import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

// import LoginForm from '../../components/LoginForm'
import HomeNav from '../../components/HomeNav'
import './Home.css';

function Home(){

    return(
        // <Container className="vertical-center text-center">=
        // <LoginForm />
        // </Container>
        <div>
            <HomeNav/>
            <Container fluid>
                <Row>
                    <h1>Hello</h1>
                </Row>
            </Container>
        </div>



    )
}

export default Home; 