import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
// import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

// import LoginForm from '../../components/LoginForm'
import HomeNav from '../../components/HomeNav'
import Subject from '../../components/Subject'
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
                    <Subject />
                </Row>
            </Container>
        </div>



    )
}

export default Home; 