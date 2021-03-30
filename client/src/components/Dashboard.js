import React, {useContext} from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import {AuthContext} from '../context/auth'
import SubjectForm from './SubjectForm'
import Subject from './Subject';
import Nav from './Nav';

function Dashboard(){
    const [showCreateSubject, setshowcreatesubject] = React.useState(false);//for modal
    return(
        <Container fluid>
            <Nav/>
            <Row  style={{margin:"20px"}}>
                {/* <Subject /> */}
            </Row>
            <Row className="justify-content-center">
                <Button  
                    variant="success"
                    onClick={()=>setshowcreatesubject(true)} 
                    style={{
                        float:"right", 
                        fontSize:"2em",
                        position:"absolute",
                        bottom:"0",
                        margin: "2em"}}
                >
                    + Create New Subject
                </Button>
                <SubjectForm
                    show={showCreateSubject}
                    onHide={()=> setshowcreatesubject(false)}
                    setshowcreatesubject={setshowcreatesubject}
                />
            </Row>
        </Container>
    )
}
    
export default Dashboard; 