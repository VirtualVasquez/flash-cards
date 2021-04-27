import React, {useContext} from 'react';
import {useQuery} from '@apollo/client';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import {AuthContext} from '../context/auth'
import NewSubject from './NewSubject'
import SubjectCard from './SubjectCard';
import Nav from './Nav';
import {FETCH_SUBJECTS_QUERY} from '../util/graphql';
import {FETCH_USER_SUBJECTS_QUERY} from '../util/graphql';
import './Dashboard.css';


function Dashboard(){
    const {user} = useContext(AuthContext)
    const username = user.username;
    // const {loading, data:{getSubjects:subjects} = {}} = useQuery(FETCH_SUBJECTS_QUERY);
    const {loading, error, data:{getUserSubjects:subjects} = {}} = useQuery(FETCH_USER_SUBJECTS_QUERY,{variables:{username}});
    console.log(JSON.stringify(error, null, 2))

    subjects ? console.log(subjects) : console.log("no subjects retrieved")

    const [showCreateSubject, setShowCreateSubject] = React.useState(false);//for modal
    const handleClose = () => setShowCreateSubject(false);

    return(
        <Container fluid>
            <Nav/>
            <Row>
            {loading ? (
                    <h1>Loading Subjects...</h1>
                ) : (
                    subjects && subjects.map(subject=>(
                        <SubjectCard subject={subject} key={subject.id}/>
                    ))
                )}
            </Row>
            <Row className="justify-content-center">
                <Button  
                    variant="success"
                    id="new-subject"
                    onClick={()=>setShowCreateSubject(true)} 
                >
                    + Create New Subject
                </Button>
                <NewSubject
                    show={showCreateSubject}
                    onHide={handleClose}
                    onSubmit={handleClose}
                />
            </Row>
        </Container>
    )
}


    
export default Dashboard; 