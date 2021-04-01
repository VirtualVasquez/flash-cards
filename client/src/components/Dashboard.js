import React, {useContext} from 'react';
import {useQuery, gql} from '@apollo/client';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import {AuthContext} from '../context/auth'
import SubjectForm from './SubjectForm'
import Subject from './Subject';
import Nav from './Nav';

function Dashboard(){
    const { loading, data:{getSubjects:subjects}} = useQuery(FETCH_SUBJECTS_QUERY);

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
                <SubjectForm
                    show={showCreateSubject}
                    onHide={()=> setshowcreatesubject(false)}
                    setshowcreatesubject={setshowcreatesubject}
                />
            </Row>
        </Container>
    )
}

const FETCH_SUBJECTS_QUERY = gql`
    {
        getSubjects{
            title username id
        }
    }
`
    
export default Dashboard; 