import React, {useContext} from 'react';
import {useQuery} from '@apollo/client';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import {AuthContext} from '../context/auth'
import NewSubject from './NewSubject'
import Subject from './Subject';
import Nav from './Nav';
import {FETCH_SUBJECTS_QUERY} from '../util/graphql';

function Dashboard(){
    const {user} = useContext(AuthContext)

    const {
        loading, 
        data:{getSubjects:subjects} = {}
    } = useQuery(FETCH_SUBJECTS_QUERY);

    if(subjects){
        console.log(subjects)
    }
    const [showCreateSubject, setshowcreatesubject] = React.useState(false);//for modal
    return(
        <Container fluid>
            <Nav/>
            <Row  style={{margin:"20px"}}>
            {loading ? (
                    <h1>Loading Subjects...</h1>
                ) : (
                    subjects && subjects.map(subject=>(
                        <Subject title={subject.title} key={subject.key}/>
                    ))
                )}
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
                <NewSubject
                    show={showCreateSubject}
                    onHide={()=> setshowcreatesubject(false)}
                    setshowcreatesubject={setshowcreatesubject}
                />
            </Row>
        </Container>
    )
}


    
export default Dashboard; 